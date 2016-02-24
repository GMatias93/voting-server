import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server();
    io.path('https://stormy-citadel-54885.herokuapp.com/');

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });

}

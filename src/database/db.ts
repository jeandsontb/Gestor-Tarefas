import mongoose from "mongoose";

/*
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongooConnecting = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongooConnecting.isConnected) {
    console.log("connectado");
    return;
  }

  if (mongooConnecting.isConnected === 1) {
    mongooConnecting.isConnected = mongoose.connections[0].readyState;

    if (mongooConnecting.isConnected === 1) {
      console.log("conexao anterior");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect();

  mongooConnecting.isConnected = 1;
  console.log("conectado a mongodb");
};

export const disconnect = async () => {
  if (mongooConnecting.isConnected !== 0) return;
  await mongoose.disconnect();
  console.log("desconectado");
};
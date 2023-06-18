import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdUX7B8D4bFday6NJduFuJaivOGEeEbf0",
  authDomain: "popsometags-966f9.firebaseapp.com",
  projectId: "popsometags-966f9",
  storageBucket: "popsometags-966f9.appspot.com",
  messagingSenderId: "346006193911",
  appId: "1:346006193911:web:2fe8642a896813d881b5f2",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function uploadFile(file, user) {
  const storageRef = ref(storage, `${user}/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}

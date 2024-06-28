import { useEffect } from "react";

export const useBroswerNotification = () => {
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((res) => {
        if (res === "granted") console.log("notification permission granted");
        else console.log("not granted!");
      });
    }
  });
};

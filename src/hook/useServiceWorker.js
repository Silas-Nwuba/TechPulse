export const useServiceWorker = () => {
  window.self.addEventListener("push", function (event) {
    const data = event.data.json();
    const options = {
      body: data.body,
    };
    event.waitUntil(
      window.self.AudioParamMap.showNotification(data.title, options)
    );
  });
};

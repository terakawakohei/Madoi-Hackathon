window.addEventListener("load", () => {
  const chatForm = document.querySelector("#chatForm");
  const nameInput = document.querySelector("#name");
  const messageInput = document.querySelector("#message");
  const logDiv = document.querySelector("#chatLog");

  addMessage = function (name, message) {
    const span = document.createElement("span");
    const br = document.createElement("br");
    span.append(name + ": " + message);
    logDiv.append(span);
    logDiv.append(br);
    logDiv.scrollTop = logDiv.scrollHeight;
  };

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    if (message.length == 0) return false;
    messageInput.value = "";
    addMessage(name, message);

    const m = new madoi.Madoi("rooms/group3");
    const element = document.querySelector("#xxx");
    addMessage = m.registerShareFunction(addMessage);
  });
  const stamp = new Stamp(element);
  m.register(stamp, [
    { method: m.sendStamp, share: {} },
    { method: m.dipose, share: {} },
    { method: m.receivedStamp, share: {} },
  ]);
});

class Stamp {
  constructor(targetElement) {
    this.targetElement = targetElement;

    this.targetElement.addEventListener("click", this.onClick);
  }

  sendStamp(stampId) {
    console.log("send", stampId);
  }

  receivedStamp(stampId) {
    console.log("received", stampId);
  }

  onClick(ev) {
    console.log(ev);
  }

  dipose() {
    this.targetElement.removeEventListener("click", this.onClick);
  }

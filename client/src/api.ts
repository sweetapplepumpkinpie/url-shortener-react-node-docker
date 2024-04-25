const post = async (url: string, body: BodyInit) =>
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

const get = async (url: string) =>
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const api = {
  get,
  post,
};

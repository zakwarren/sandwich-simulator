class Server {
  baseUrl = "https://sandwich-simulator-f4119.firebaseio.com";

  get = async (route) => {
    try {
      const response = await fetch(this.baseUrl + route);
      const result = await response.json();
      return result;
    } catch (error) {
      return { message: "error", data: error };
    }
  };

  post = async (route, data) => {
    try {
      const response = await fetch(this.baseUrl + route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return { message: "error", data: error };
    }
  };
}

export default new Server();

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

class Auth extends Server {
  baseUrl = "https://identitytoolkit.googleapis.com/v1/accounts";

  signUp = async (authData) => {
    return await this.post(
      ":signUp?key=" + process.env.REACT_APP_API_KEY,
      authData
    );
  };

  signIn = async (authData) => {
    return await this.post(
      ":signInWithPassword?key=" + process.env.REACT_APP_API_KEY,
      authData
    );
  };
}

export default new Server();

export const AuthServer = new Auth();

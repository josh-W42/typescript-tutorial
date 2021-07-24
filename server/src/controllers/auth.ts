import { Response, Request, NextFunction } from "express";

// we created an interface to fix the type values inside
// of request that has a body
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const showLogin = (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
};

const login = (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  // we needed a type guard and an interface to fix the type of Request, originally it was any
  if (email && password && email === "cool@cool.com" && password === "pass") {
  } else {
    res.json({
      message: "Invalid Email and Password",
    });
  }
};

const logout = (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
};

export const routeFunctions = {
  showLogin,
  login,
  logout,
};

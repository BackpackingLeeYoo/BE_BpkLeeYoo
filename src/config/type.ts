interface Development {
  db: string;
}

interface Config {
  port: string;
}

interface Jwtwebtoken {
  secretKey: string;
  expiresIn: string;
}

export { Development, Config, Jwtwebtoken };

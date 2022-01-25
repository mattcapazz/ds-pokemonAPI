const isEmail = require("is-email");
const db = require("../cfg/database");

exports.canAuth = async ({ email, password }) => {
  if (!email || !password) {
    return false;
  }

  const statement = `
            SELECT
                *
            FROM
                users
            WHERE
                email = $1 AND password = CAST(sha256($2) AS VARCHAR);
        `;

  const values = [email, password];

  return await db
    .query(statement, values)
    .then((users) => users.rows.length >= 1);
};

exports.getAll = async ({ isAdmin = false }) => {
  const statement = `
            SELECT
                id, email, name 
            FROM
                users
            WHERE
                is_admin = $1
            ORDER by
                name;
      `;

  const values = [isAdmin];

  return await db.query(statement, values).then((users) => users.rows);
};

exports.getByEmail = async ({ email }) => {
  const statement = `
            SELECT 
                id, email, name
            FROM
                users
            WHERE
                email = $1;
      `;

  const values = [email];

  return await db.query(statement, values).then((q) => q.rows[0]);
};

exports.insert = async ({ email, password, name }) => {
  if (!isEmail(email)) {
    throw new Error(`O campo email não é um e-mail válido: ${email}`);
  }

  if (typeof name !== "string" || name.length <= 0) {
    throw new Error(`O campo nome não pode ser vazio`);
  }

  if (typeof password !== "string" || password.length < 6) {
    throw new Error(`O campo password deve ter pelo menos 6 carateres`);
  }

  let previousUser = await exports.getByEmail({ email });
  if (previousUser) {
    throw new Error(
      `Já existe um utilizador com o email pedido. Id: ${previousUser.id} | Nome: ${previousUser.name}`
    );
  }

  const statement = `
                INSERT INTO
                    users(email, name, password)
                VALUES
                    ($1, $2, CAST(sha256($3) AS VARCHAR))
                RETURNING id;
          `;

  const values = [email, name, password];

  let createdUserId = await db.query(statement, values).then((q) => q.rows);

  if (createdUserId) {
    return createdUserId;
  } else {
    throw new Error("The user creation failed");
  }
};

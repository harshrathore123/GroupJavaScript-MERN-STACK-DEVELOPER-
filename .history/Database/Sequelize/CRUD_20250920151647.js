// app.js
const User = require("./Model/user");
const sequelize = require("./db");

(async () => {
  try {
    // Sync the DB (creates table if not exists)
    await sequelize.sync();

    // INSERT
    const newUser = await User.create({
      name: "Alice",
      email: "yoshita2105@gmail.com",
    });
    console.log(" User created:", newUser.toJSON());

    // READ
    const users = await User.findAll();
    console.log(" All users:", users.map(u => u.toJSON()));

    // UPDATE
    await User.update(
      { name: "Alice Cooper" },
      { where: { id: 1 } }
    );
    const updatedUser = await User.findByPk(1);
    console.log(" Updated user:", updatedUser.toJSON());

    // DELETE
    await User.destroy({ where: { id: 1 } });
    console.log(" User deleted");
  } catch (err) {
    console.error(" Error:", err);
  } finally {
    await sequelize.close();
  }
})();

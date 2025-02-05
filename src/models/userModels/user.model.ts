import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";
import sequelize from "../../config/db"; // Ensure this is the correct path to your Sequelize instance

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare username: string;
    declare email: string;
    declare password: string;
    declare role: string;
}

sequelize.sync({ force: true }) // Use { force: true } only for development
  .then(() => {
    console.log("Database & tables synced!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });


User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "User",
    }
);

export default User;

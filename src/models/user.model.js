import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const userModel = {
    findAll: async () => {
        let data = await prisma.users.findMany()
        return {
            status: true,
            message: "Found all users!",
            data
        }
    },
    create: async (userData) => {
        let user = await prisma.users.create({
            data: {
                ...userData
            }
        })
        return {
            status: true,
            message: "Created successfully!",
            data: user
        }
    },
    update: async (id, userData) => {
        let data = await prisma.users.update({
            where: {
                id: Number(id)
            },
            data: {
                ...userData
            }
        })
        return {
            status: true,
            message: "Updated successfully!",
            data
        }
    },
    delete: async (id) => {
        let data = await prisma.users.delete({
            where: {
                id: Number(id)
            }
        })
        return {
            status: true,
            message: "Deleted successfully!",
            data
        }
    }
}
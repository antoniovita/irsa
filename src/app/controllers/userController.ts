import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Rota para pegar todos os usuários - ADM
export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar usuários" }, { status: 500 });
  }
};

// Cria usuário com senha de 6 dígitos aleatória e nome vindo da req - ADM
export const createUser = async (name: string) => {
  try {
    const generatedPassword = Math.floor(100000 + Math.random() * 900000).toString();
    const newUser = await prisma.user.create({
      data: { name, password: generatedPassword },
    });

    return NextResponse.json({ message: "Usuário criado com sucesso", user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar usuário" }, { status: 500 });
  }
};

// Pega usuário com base no ID - ADM e USER
export const getUserById = async (id: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { results: true },
    });

    if (!user) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar usuário" }, { status: 500 });
  }
};

// Deleta o usuário - ADM
export const deleteUser = async (id: number) => {
  try {
    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Usuário deletado com sucesso" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao deletar usuário" }, { status: 500 });
  }
};

// Pega usuário pelo nome - ADM
export const getUserByName = async (name: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: { name },
      include: { results: true },
    });

    if (!user) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar usuário" }, { status: 500 });
  }
};

// Altera dados do usuário - ADM e USER
export const updateUser = async (
  id: number,
  updateData: { name?: string; password?: string }
) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(
      { message: "Usuário atualizado com sucesso", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Erro ao atualizar usuário" }, { status: 500 });
  }
};

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Criar um resultado 
export async function createResult(data: { userId: number; doctorId: number; examId: number }) {
  try {
    const result = await prisma.result.create({
      data,
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar resultado" }, { status: 500 });
  }
}

// Buscar todos os resultados
export async function getResults() {
  try {
    const results = await prisma.result.findMany({
      include: {
        user: { select: { name: true } },
        doctor: { select: { name: true } },
        exam: { select: { name: true } },
      },
    });

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar resultados" }, { status: 500 });
  }
}

// Buscar um resultado pelo ID
export async function getResultById(id: number) {
  try {
    const result = await prisma.result.findUnique({
      where: { id },
      include: {
        user: { select: { name: true } },
        doctor: { select: { name: true } },
        exam: { select: { name: true } },
      },
    });

    if (!result) return NextResponse.json({ error: "Resultado não encontrado" }, { status: 404 });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar resultado" }, { status: 500 });
  }
}

// Deletar um resultado pelo ID
export async function deleteResult(id: number) {
  try {
    const result = await prisma.result.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Resultado deletado com sucesso" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao deletar resultado" }, { status: 500 });
  }
}

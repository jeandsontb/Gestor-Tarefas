import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  //O MIDDLEWARE PEGA EM TODOS OS ARQUIVOS DA PASTA CONTIDA E NÃO VAI CARREGAR A APLICAÇÃO
  //ARGUMENTO AUXILIAR PARA RESOLVER O PROBLEMA
  // if(req.page.name === '/api/entries') return NextResponse.next()

  const id = req.page.params?.id || "";

  const checkMongoIDRegExp: any = new RegExp("^[0-9a-fA-F]{24}$");

  if (!checkMongoIDRegExp.test(id)) {
    return new Response(JSON.stringify({ message: "ID não é válido" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return NextResponse.next();
}

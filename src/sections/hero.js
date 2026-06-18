export function hero() {
  return `
    <section class="flex min-h-screen items-center justify-center bg-black">

      <div class="max-w-4xl text-center">

        <p class="mb-4 text-sm uppercase tracking-[0.3em] text-green-500">
          Assistente de TI
        </p>

        <h1 class="mb-6 text-6xl font-bold text-white md:text-8xl">
          Glauber
        </h1>

        <p class="mx-auto max-w-2xl text-lg text-zinc-400">

          Profissional de TI construindo soluções digitais modernas
          enquanto evolui para o desenvolvimento Front-End através
          de projetos reais e aprendizado contínuo.

        </p>

        <div class="mt-10 flex justify-center gap-4">

          <button
            class="rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Ver Projetos
          </button>

          <button
            class="rounded-lg border border-zinc-700 px-6 py-3 text-white transition hover:border-white"
          >
            Entrar em Contato
          </button>

        </div>

      </div>

    </section>
  `;
}
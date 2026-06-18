export function navbar() {
  return `
    <nav class="fixed top-0 left-0 z-0 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">

      <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <a href="#" class="text-xl font-bold text-white">
          Glauber
        </a>

        <ul class="hidden gap-8 text-sm text-zinc-400 md:flex">

          <li>
            <a href="#about" class="hover:text-white">
              Sobre
            </a>
          </li>

          <li>
            <a href="#projects" class="hover:text-white">
              Projetos
            </a>
          </li>

          <li>
            <a href="#contact" class="hover:text-white">
              Contato
            </a>
          </li>

        </ul>

      </div>

    </nav>
  `;
}
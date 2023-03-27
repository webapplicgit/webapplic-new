<script lang="ts">
	import LocaleSwitcher from './LocaleSwitcher.svelte'
  let year = new Date().getFullYear()
</script>

<footer class="text-gray-600 body-font">
    <div class="bg-gray-100">
      <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg width="78" height="57" viewBox="0 0 78 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.3483 43.9635C51.9437 45.144 50.5687 45.6697 49.4797 45.0603L4.3546 19.8089C2.78023 18.9279 3.08517 16.577 4.8322 16.1268L63.8218 0.926208C65.3637 0.528876 66.7291 2.00509 66.2128 3.51139L52.3483 43.9635Z" fill="#0D538E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M50.4298 10.3142C47.8902 11.7338 43.2727 14.2488 40.1687 15.9024C37.0647 17.5565 30.9466 20.8698 26.5728 23.2658L18.6204 27.6221L18.4793 36.2158C18.3895 41.6778 18.5332 45.0044 18.8728 45.3441C19.2427 45.714 21.1385 44.1522 25.051 40.2515C31.1179 34.2041 30.9902 34.5838 27.5891 32.6978L25.9632 31.7958L40.2488 20.4511C48.1057 14.2114 54.8724 8.78734 55.2854 8.39793C56.6783 7.08502 55.0725 7.71916 50.4298 10.3142Z" fill="#F38A01"/>
          </svg>
          <span class="text-2xl text-orange-500">Landing</span> <span class="ml-1 text-2xl text-blue-900">Page</span>
        </a>
        <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© {year}</p>
        <span class="m-auto">
          Termos de uso
        </span>
        <span class="m-auto">
          Política de privacidade
        </span>
        <span class="m-auto">
          Idioma: <LocaleSwitcher />
        </span>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
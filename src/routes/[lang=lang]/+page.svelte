<script lang="ts">
	import LL from '$i18n/i18n-svelte'
	import { onMount } from 'svelte'

	console.info($LL.log({ fileName: '+page.svelte' }))

	let spectators = 0

	onMount(() => {
		const interval = setInterval(updateSpectatorCount, 2_000)

		return () => clearInterval(interval)
	})

	const updateSpectatorCount = async () => {
		const response = await fetch(
			'/api/spectators?' + new URLSearchParams({ oldSpectators: spectators.toString() }).toString(),
		)
		const result = await response.json()
		spectators = result.spectators
	}

	
	let year = new Date().getFullYear()

	const key: string = import.meta.env.VITE_TAK;
  	const token: string = import.meta.env.VITE_TAT;

	const buscarCard = async () => {
		// ID do card que você deseja acessar
		const cardId: string = '6011a5847c73cf217c7a963b';

		try {
		const response = await fetch(`https://api.trello.com/1/cards/${cardId}?key=${key}&token=${token}`);
		const data = await response.json();

		const conteudoCard: HTMLElement | null = document.getElementById('conteudoCard');
		if (conteudoCard) {
			conteudoCard.innerHTML = `<h2>${data.name}</h2><p>${data.desc}</p>`;
		}
		} catch (error) {
		console.error('Erro ao buscar o card:', error);
		}
	};

	


</script>

<section class="text-gray-600 body-font bg-gradient-to-t from-sky-400 to-sky-800">
	<div class="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
	  <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
		<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
			{$LL.snippet_title({ year: year })}
		</h1>
		<span class="mb-8 text-white">{$LL.snippet_description()}</span>
		<div class="flex justify-center">
		  <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{$LL.snippet_cta()}</button>
		</div>
	  </div>
	  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
		<img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
	  </div>
	</div>
</section>

<section class="text-gray-600 body-font">
	<div class="px-8 py-24 mx-auto bg-slate-200">
	  <div class="text-center mb-20">
		<h1 class="sm:text-3xl text-2xl font-medium title-font text-sky-900 mb-4">Landing pages de alta performance</h1>
		<p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">Sabemos que cada negócio é único e, por isso, nossas landing pages são totalmente customizadas e feitas sob medida para o seu negócio, produtos e serviços, permitindo a criação de páginas que reflitam a identidade e os objetivos de sua marca transmitindo o melhor de seus produtos ao seu público alvo</p>
		<div class="flex mt-6 justify-center">
		  <div class="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
		</div>
	  </div>
	  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
		<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
		  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-500 text-white mb-5 flex-shrink-0">
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M20 2.44434C8.95417 2.44434 0 11.3985 0 22.4443C0 26.111 0.989584 29.5457 2.7125 32.4999C3.10208 33.1679 3.84444 33.5554 4.61806 33.5554H35.3819C36.1556 33.5554 36.8979 33.1679 37.2875 32.4999C39.0104 29.5457 40 26.111 40 22.4443C40 11.3985 31.0458 2.44434 20 2.44434ZM20 6.88878C21.0215 6.88878 21.8458 7.59225 22.1056 8.53114C22.0285 8.68809 21.9222 8.82489 21.866 8.99434L21.2257 10.9159C20.8694 11.1582 20.4639 11.3332 20.0007 11.3332C18.7736 11.3332 17.7785 10.3381 17.7785 9.111C17.7785 7.88392 18.7729 6.88878 20 6.88878ZM6.66667 26.8888C5.43958 26.8888 4.44444 25.8936 4.44444 24.6666C4.44444 23.4395 5.43958 22.4443 6.66667 22.4443C7.89375 22.4443 8.88889 23.4395 8.88889 24.6666C8.88889 25.8936 7.89375 26.8888 6.66667 26.8888ZM10 15.7777C8.77292 15.7777 7.77778 14.7825 7.77778 13.5554C7.77778 12.3284 8.77292 11.3332 10 11.3332C11.2271 11.3332 12.2222 12.3284 12.2222 13.5554C12.2222 14.7825 11.2271 15.7777 10 15.7777ZM27.1368 10.7492L22.8778 23.527C23.8285 24.3423 24.4444 25.5374 24.4444 26.8888C24.4444 27.7027 24.2097 28.4548 23.8278 29.111H16.1722C15.7903 28.4548 15.5556 27.7027 15.5556 26.8888C15.5556 24.5318 17.3958 22.6228 19.7153 22.4728L23.975 9.69434C24.2646 8.82211 25.2063 8.34364 26.0833 8.64086C26.9563 8.93184 27.4271 9.87628 27.1368 10.7492ZM28.1549 14.7214L29.2326 11.4888C29.4736 11.3992 29.7278 11.3339 30 11.3339C31.2271 11.3339 32.2222 12.3291 32.2222 13.5561C32.2222 14.7832 31.2271 15.7784 30 15.7784C29.2097 15.7777 28.5493 15.3423 28.1549 14.7214ZM33.3333 26.8888C32.1063 26.8888 31.1111 25.8936 31.1111 24.6666C31.1111 23.4395 32.1063 22.4443 33.3333 22.4443C34.5604 22.4443 35.5556 23.4395 35.5556 24.6666C35.5556 25.8936 34.5604 26.8888 33.3333 26.8888Z" fill="white"/>
			</svg>
		  </div>
		  <div class="flex-grow">
			<h2 class="text-sky-900 text-2xl title-font font-medium mb-3">Velocidade de carregamento</h2>
			<p class="leading-relaxed text-gray-600">A velocidade de carregamento de uma página web é um fator crítico para o sucesso online. Estudos mostram que os usuários esperam que as páginas carreguem em menos de três segundos e, se isso não acontecer, é muito provável que eles abandonem o site e procurem em outro lugar. Isso pode resultar em perda de tráfego e conversões para sua marca</p>
		  </div>
		</div>
		<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
		  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-500 text-white mb-5 flex-shrink-0">
			<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
				<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
				<circle cx="12" cy="7" r="4"></circle>
			</svg>
		  </div>
		  <div class="flex-grow">
			<h2 class="text-sky-900 text-2xl title-font font-medium mb-3">Leads mais relevantes</h2>
			<p class="leading-relaxed text-gray-600">Você já ouviu falar em SEO, teste A/B, densidade de palavras-chave e proteção contra cadastros de bots? Se não, não se preocupe - nós estamos aqui para ajudá-los a alcançar o máximo de sucesso com suas landing pages. Crie listas limpas com leads relevantes e inicie um relacionamento com potenciais clientes para oferecer seus produtos e serviços</p>
		  </div>
		</div>
		<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
		  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-500 text-white mb-5 flex-shrink-0">
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_309_13)">
				<path d="M11.1111 33.3338C9.33333 33.3338 7.55556 31.7782 6.66667 31.1115C2.22222 28.0004 0.888889 26.8893 0 26.2227V35.556C0 36.7831 0.995139 37.7782 2.22222 37.7782H20C21.2271 37.7782 22.2222 36.7831 22.2222 35.556V26.2227C21.3333 26.8893 20 28.0004 15.5556 31.1115C14.6667 31.7782 12.8889 33.3338 11.1111 33.3338ZM20 20.0004H2.22222C0.995139 20.0004 0 20.9956 0 22.2227V23.3338C1.77778 24.6671 1.55556 24.6671 8 29.3338C8.66667 29.7782 10 31.1115 11.1111 31.1115C12.2222 31.1115 13.5556 29.7782 14.2222 29.556C20.6667 24.8893 20.4444 24.8893 22.2222 23.556V22.2227C22.2222 20.9956 21.2271 20.0004 20 20.0004ZM37.7778 13.3338H15.5556C14.3285 13.3338 13.3333 14.3289 13.3333 15.556V17.7782H20C22.3063 17.7782 24.2076 19.5435 24.4243 21.7935L24.4444 21.7782V31.1115H37.7778C39.0049 31.1115 40 30.1164 40 28.8893V15.556C40 14.3289 39.0049 13.3338 37.7778 13.3338ZM35.5556 22.2227H31.1111V17.7782H35.5556V22.2227ZM11.1111 15.556C11.1111 13.1053 13.1049 11.1115 15.5556 11.1115H31.1111V4.44488C31.1111 3.2178 30.116 2.22266 28.8889 2.22266H6.66667C5.43958 2.22266 4.44444 3.2178 4.44444 4.44488V17.7782H11.1111V15.556Z" fill="white"/>
				</g>
				<defs>
				<clipPath id="clip0_309_13">
				<rect width="40" height="40" fill="white"/>
				</clipPath>
				</defs>
			</svg>
		  </div>
		  <div class="flex-grow">
			<h2 class="text-sky-900 text-2xl title-font font-medium mb-3">Envio automático de e-mails</h2>
			<p class="leading-relaxed text-gray-600">Quando se trata de envio de e-mails programados, oferecemos uma ampla gama de opções de automação de campanhas de e-mail marketing para garantir que seus leads sejam nutridos de maneira eficaz. Com nossa ajuda, você pode criar uma série de e-mails programados para serem enviados aos seus leads em momentos estratégicos, aumentando suas chances de conversão.</p>
		  </div>
		</div>
	  </div>
	</div>
  </section>

  <section class="text-gray-600 body-font">
	<div class="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
	  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
		<img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
	  </div>
	  <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
		<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-sky-900">Testes de velocidade e otimização</h1>
		<p class="mb-8 leading-relaxed text-gray-500">Não é apenas a experiência do usuário que é afetada pela velocidade da página, os motores de busca também levam em consideração a velocidade da página ao classificar seus resultados de busca. oferecemos testes de velocidade para garantir que suas páginas carreguem em tempo hábil e atendam às expectativas dos usuários. Isso ajuda a garantir que sua página seja bem classificada nos resultados de busca orgânica, aumentando suas chances de sucesso online.</p>
		<div class="flex justify-center">
		  <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-900 rounded text-lg">COMO TESTAR A VELOCIDADE</button>
		</div>
	  </div>
	</div>
  </section>

  <section class="text-gray-600 body-font bg-slate-200">
	<div class="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
	  <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
		<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-sky-900">Listas mais limpas e eficientes</h1>
		<p class="mb-8 leading-relaxed text-gray-500">Técnicas avançadas para otimizar a densidade de palavras-chave em suas páginas, garantindo que elas sejam mais facilmente encontradas pelos motores de busca. Teste diferentes versões de sua landing page para medir sua eficácia, permitindo que você ajuste e aprimore sua abordagem, proteja sua lista de cadastros feitos por robôs e tenha listas mais enxutas com leads relevantes e sem a interferência de cadastros de bots</p>
		<div class="flex justify-center">
		  <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-900 rounded text-lg">COMO CRIAR UMA LISTA OTIMIZADA</button>
		</div>
	  </div>
	  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
		<img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
	  </div>
	</div>
  </section>

  <section class="text-gray-600 body-font">
	<div class="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
	  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
		<img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
	  </div>
	  <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
		<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-sky-900">Transforme leads em clientes</h1>
		<p class="mb-8 leading-relaxed text-gray-500">Criar um relacionamento com leads por e-mail é uma das estratégias de marketing mais eficazes para transformar leads em clientes. Através de uma série de e-mails estrategicamente planejados e programados, é possível nutrir o interesse dos leads, fornecer informações valiosas sobre o produto ou serviço e, finalmente, incentivá-los a realizar a ação desejada, como fazer uma compra ou agendar uma demonstração</p>
		<div class="flex justify-center">
		  <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-900 rounded text-lg">COMO TRANSFORMAR LEAD EM CLIENTE</button>
		</div>
	  </div>
	</div>
  </section>

  <section class="text-gray-600 body-font bg-slate-200">
	<div class="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
	  <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
		<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-sky-900">Ganhe tempo para outras atividades</h1>
		<p class="mb-8 leading-relaxed text-gray-500">Não somos uma plataforna do tipo faça você mesmo, acreditamos que você pode se dedicar às atividades e decições estratégicas de suas campanhas enquanto nós fazemos todo o planejamento, desenvolvimento e implantação de landing pages feitas sob medida para seu negócio, seguindo as melhores metodologias de mercado, aplicamos conceitos de design thinking para transformar as ideias de design em protótipos testáveis aprovados em entregas parciais. Você acompanha online em tempo real o processo de desenvolvimento</p>
		<div class="flex justify-center">
		  <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-900 rounded text-lg">QUERO CRIAR MINHA LANDING PAGE</button>
		</div>
	  </div>
	  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
		<img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
	  </div>
	</div>
  </section>

<section class="text-gray-600 body-font bg-sky-900">
	<form method="POST" action="https://simple.sevenheads.com.br/mail">
		<div class="container px-8 py-24 mx-auto">
			<div class="flex flex-col text-center w-full mb-12">
				<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-orange-500">E-book Landing Page de Alta Performance</h1>
				<p class="lg:w-2/3 mx-auto leading-relaxed text-white">Preparamos um conteúdo sobre os principais assuntos que envolvem a criação de landing pages capazes de entregar uma melhor taxa de conversão de leads e iniciar um relacionamento por e-mail com potenciais clientes, para receber esse e-book gratuíto informe seu nome e seu e-mail nos campos abaixo. Não se preocupe, seus dados estão protegidos conosoco, não compartilhamos com terceiros e somos contra a prática de spam, remova seu e-mail a qualquer momento</p>
			</div>
			<div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
				<div class="relative flex-grow w-full">
				<label for="full-name" class="leading-7 text-sm text-white">Digite seu nome</label>
				<input type="text" id="full-name" name="name" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-900 focus:ring-2 focus:ring-orange-500 text-base outline-none text-sky-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
				</div>
				<div class="relative flex-grow w-full">
				<label for="email" class="leading-7 text-sm text-white">Digite seu e-mail</label>
				<input type="email" id="email" name="email" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-900 focus:ring-2 focus:ring-orange-500 text-base outline-none text-sky-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
				</div>
				<input type="hidden" id="company" name="company" value="Company teste">
				<button type="submit" class="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-900 rounded text-lg">SOLICITAR</button>
			</div>
		</div>
	</form>
</section>

<section class="text-gray-600 body-font">
	<div class="container px-8 py-24 mx-auto">
	  <div class="text-center mb-20">
		<h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Perguntas frequentes</h1>
	  </div>
	  
	  <h1>Conteúdo do Card Trello</h1>
	  <button on:click={buscarCard} id="buscarCard">Buscar Card</button>
	  <div id="conteudoCard"></div>
		
</section>

<!-- <h2>
	{$LL.welcome({ year: 2021 })}
</h2>

<h3>
	{$LL.summit.schedule(day)}
</h3>

<div class="spectators">
	{$LL.spectators(spectators)}
</div>

<p class="text-teal-500">Tailwind is working</p>

<div>
	<p>Test SCSS</p>
</div> -->
  
<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Hi, I'm Adrian. A web developer
        </h2>
        <!-- <h3 class="font-semibold">A web developer</h3> -->
        <p class="mt-3 text-gray-600">
You can likewise call me Adi. I am <span v-html="getAge('1995-12-2')"> </span> years old.
          and love to tinker stuffs and do web programming the most. 
        </p>
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
        I am so much into PHP, JavaScript, MySQL and Laravel. I started my career as a web developer since February 2022.
        <br>
        I am currently employed as a Junior Web Developer for a company here in Ortigas District Pasig - one of the Philippines' prime business district.
        </p>
      </div>
      
        <h2 class="ml-2   text-2xl mt-8 leading-7 font-semibold">
        Freelance Experiences
        </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">I'm familiar in kotlin and ktor.</div>
      <div class="md:mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">I also did yii framework and craft cms before.</div>
      <div class="md:mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">I can deploy your project on Digital Ocean or Vultr from scratch</div>
      </div>
        <h2 class="ml-2  text-2xl mt-8 leading-7 font-semibold">
        Work Experiences
        </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
      <div class="gap-4 flex">
      <h3 class="font-semibold leading-7 text-xl">Chanzglobal</h3>
      <span><img class="w-6" src="/chanz.jpeg"></span>
      </div>
      <span class="font-semibold">Junior Web Developer</span>
      <p>A small startup company in Ortigas Pasig.</p>
      <span>February 2022 - Present</span>
      
      </div>
      </div>
      <div class="flex justify-center pt-4 pb-4 space-x-2">
        <a href="https://github.com/stryfe200fps" target="_blank"><svg
          class="w-6 h-6 text-gray-600 hover:text-gray-800 button--github"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        ><path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z" fill="currentColor" /></svg></a>
        <a href="https://twitter.com/adi_is_a_coder" target="_blank">
        <svg
          class="w-6 h-6 text-gray-600 hover:text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        ><path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z" fill="currentColor" />
        </svg></a>
        <a href="https://www.linkedin.com/in/adrian-radores-a54477138/" target="_blank">
        <svg 
        style="fill:rgba(75,85,99,var(--tw-text-opacity));"
          aria-hidden="true"
          role="img"
          class="w-6 h-6 text-gray-600 hover:text-gray-800"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg" width="32" height="32" ><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>
      <div class="flex justify-center"> 
      <p > 
      Handcrafted by Adrian Radores
      </p>
</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NuxtTutorial',
  methods: {
    getAge(dateString) {

    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;

    }
  }
}
</script>

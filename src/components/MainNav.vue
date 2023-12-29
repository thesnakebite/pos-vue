<script setup>
    import Link from '@/components/Link.vue'
</script>

<template>
    <header class="flex justify-between items-center absolute top-0 px-10 py-5 bg-gray-700 w-full z-10">
        <div>
            <h1 class="text-3xl font-black text-white">
                POS
                <span class="text-green-400">Vue.js</span>
            </h1>
        </div>

        <nav>
            <Link 
                to="admin"
            >
                Administrar
            </Link>
        </nav>
    </header>
</template>


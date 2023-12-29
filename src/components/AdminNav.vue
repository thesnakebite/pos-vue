<script setup>
    import { RouterLink } from 'vue-router'
    import Link from './Link.vue'
    import Logo from './Logo.vue'
</script>

<template>
    <header class="flex justify-between items-center absolute top-0 px-10 py-5 bg-gray-700 w-full z-10">
        <div>
            
            <Logo />
        </div>

        <nav>
            <RouterLink
                :to="{name: 'products'}"
                class="rounded p-2 font-bold text-white"
            > 
                Productos
            </RouterLink>
            <RouterLink
                :to="{name: 'sales'}"
                class="rounded p-2 font-bold text-white"
            > 
                Ventas
            </RouterLink>
            <Link 
                to="shop"
            >
                Ir a Tienda
            </Link>
        </nav>
    </header>
</template>


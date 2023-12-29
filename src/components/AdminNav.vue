<script setup>
    import Link from '@/components/Link.vue'
    import Logo from '@/components/Logo.vue'
</script>

<template>
    <header class="flex justify-between items-center absolute top-0 px-10 py-5 bg-gray-700 w-full z-10">
        <div>
            
            <Logo />
        </div>

        <nav>
            <Link 
                to="shop"
            >
                Ir a Tienda
            </Link>
        </nav>
    </header>
</template>


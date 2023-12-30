<script setup>
    import Link from '@/components/Link.vue'

    
    const handleIconClick = (node, e) => {
        node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
        node.props.type = node.props.type === 'password' ? 'text' : 'password'
    }

</script>

<template>
    <div class="">
        <Link 
            to="products">
                Volver
        </Link>
        <h1 class="text-4xl font-black my-10">Nuevo producto</h1>

        <div class="flex justify-center bg-white shadow">
            <div class="mt-10 p-10 w-full 2xl:w-2/4">
                <FormKit
                    type="form"
                    submit-label="Agregar producto"
                >
                    <FormKit
                        type="text"
                        label="Nombre"
                        name="name"
                        placeholder="Nombre del producto"
                        validation="required"
                        :validation-messages="{required: 'El Nombre del producto es Obligatorio'}"
                    />
                    <FormKit
                        type="file"
                        label="Imagen del producto"
                        name="image"
                        placeholder="Nombre del producto"
                        validation="required"
                        :validation-messages="{required: 'La Imagen del producto es Obligatorio'}"
                        accept="jpg, jpeg, png"
                        multiple="false"
                    />
                    <FormKit
                        type="select"
                        label="Categoría"
                        name="category"
                        validation="required"
                        :validation-messages="{required: 'La Categoría es Obligatoria'}"
                        :options="[
                            {value: '1', label: 'Categoría 1'},
                            {value: '2', label: 'Categoría 2'},
                            {value: '3', label: 'Categoría 3'},
                            {value: '4', label: 'Categoría 4'},
                        ]"
                    />
                    <FormKit
                        type="number"
                        label="Precio"
                        name="price"
                        placeholder="Precio del producto"
                        validation="required"
                        :validation-messages="{required: 'El Precio del producto es Obligatorio'}"
                        min="1"
                    />
                    <FormKit
                        type="number"
                        label="Disponibles"
                        name="availability"
                        placeholder="Cantidad disponible"
                        validation="required"
                        :validation-messages="{required: 'La Cantidad es Obligatoria'}"
                        min="1"
                    />
                </FormKit>
            </div>
        </div>
    </div>
</template>
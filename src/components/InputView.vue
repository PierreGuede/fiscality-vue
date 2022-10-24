<template>
    <!-- <label  :for="name" class=" ml-4 block text-sm text-left text-slate-700">{{ labeling }}</label>
        <input 
            autofocus
            :id="idInput" 
            :type="typeInput" 
            :value="modelValue"
            @input="$emit('update:modelValue',$event.target.value)"
            :placeholder="placeholder" 
            class="mt-1  w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            > -->

            <input :id="idInput" 
            :type="typeInput" 
            :value="modelValue"
            @input="$emit('update:modelValue',$event.target.value)"
            :placeholder="placeholder"  class="peer h-12 px-3 w-full border border-gray-300 rounded-sm focus:ring-blue-500/40 focus:ring-4 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600" />
            <label :for="name" class="absolute left-3 px-2 -top-3.5 text-gray-600 text-sm bg-white transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">{{ labeling }}</label>

</template>
<script>
    export default{
        name:'InputView',
        props: {
            name:String,
            labeling: String,
            typeInput:{
                type:String
            },
            idInput: {
                type:String
            },
            placeholder:{
                type:String
            },
            modelValue:{
                type:[String, Number]
            },
            essai:{
                type:[String, Number]
            },
        },
    }
</script>
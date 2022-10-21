<template>
    <label  :for="name" class=" ml-4 block text-sm text-left text-slate-700">{{ labeling }}</label>
        <input 
            autofocus
            :id="idInput" 
            :type="typeInput" 
            :value="modelValue"
            @input="$emit('update:modelValue',$event.target.value)"
            :placeholder="placeholder" 
            class="mt-1  w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
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
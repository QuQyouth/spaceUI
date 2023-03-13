<template>
    <div class="circle-wrapper">        
        <div class="animate-wave-1">
            <!-- <div class="animate-wave-1"></div> -->
            <!-- <div class="animate-wave-2"></div> -->
            
        </div>
        <div class="animate-wave-2"></div>
        <div class="animate-wave-3"></div>
        <div class="circle-text">
            start
        </div>
    </div>

</template>

<style scoped lang="scss">
    @keyframes wave {
        from{
            opacity: 1;
            width: 80px;
            height: 80px;
        }
        to{
            opacity: 0;
            width: 100%;
            height: 100%;
        }
    }
    .circle-wrapper{
        width: 160px;
        height: 160px;
        border-radius: 50%;
        margin: 0 auto;
        position: relative;
        background: transparent;
        .circle-text{
            cursor: pointer;
            width: 80px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            background: #fff;
            box-shadow: $default-shadow;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: cursive;
            font-size: 24px;
            font-weight: bolder;
            color: $activated-background;
        }

        
        [class^="animate-wave"] {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: $inner-shadow;
            animation: wave 6s infinite;
        }
        .animate-wave-2{
            animation-delay: 2s;
        }
        .animate-wave-3{
            animation-delay: 4s;
        }
    }

</style>
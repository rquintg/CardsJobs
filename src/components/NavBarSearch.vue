<template>
    <div class="bg-light position-relative collapsed main-content" style="min-height: calc(100vh - 75px) !important">
        <div class="p-0 pb-5 container-fluid">
            <div id="title-search" class="p-0 m-0 container-fluid">
                <div class="bg-blue py-3">
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-6 col-12">
                                <div class="input-group custom-input-group">
                                    <div class="bg-light input-group-prepend">
                                        <div class="input-group-text">
                                            <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                                                aria-label="search" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="bi-search b-icon bi">
                                                <g>
                                                    <path
                                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <input type="search" placeholder="Busca por cargo, salario, ubicación o empresa"
                                        value="" class="form-control form-control-md">

                                </div>

                            </div>
                            <div class="text-md-right text-white text-truncate mt-2 mt-md-0 col-md-6 col-12">
                                <button type="button" class="btn btn-outline-light btn-sm rounded-pill">
                                    Área
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                                        aria-label="caret down fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="bi-caret-down-fill b-icon bi">
                                        <g transform="translate(8 8) scale(0.7 0.7) translate(-8 -8)">
                                            <path
                                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z">
                                            </path>
                                        </g>
                                    </svg>
                                </button>
                                <button type="button" class="btn btn-outline-light btn-sm rounded-pill">
                                    Cargo
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                                        aria-label="caret down fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="bi-caret-down-fill b-icon bi">
                                        <g transform="translate(8 8) scale(0.7 0.7) translate(-8 -8)">
                                            <path
                                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z">
                                            </path>
                                        </g>
                                    </svg>
                                </button>
                                <button type="button" class="btn btn-outline-light btn-sm rounded-pill">
                                    Salario
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                                        aria-label="caret down fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="bi-caret-down-fill b-icon bi">
                                        <g transform="translate(8 8) scale(0.7 0.7) translate(-8 -8)">
                                            <path
                                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z">
                                            </path>
                                        </g>
                                    </svg>
                                </button>
                                <button type="button" class="btn btn-outline-light btn-sm rounded-pill">
                                    Ubicación
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                                        aria-label="caret down fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="bi-caret-down-fill b-icon bi">
                                        <g transform="translate(8 8) scale(0.7 0.7) translate(-8 -8)">
                                            <path
                                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z">
                                            </path>
                                        </g>
                                    </svg>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <!-- Incluimos el componente CardJobs.vue -->

            <CardJobs />



        </div>

    </div>
</template>

<script>
import CardJobs from './CardJobs.vue';

export default {
    name: 'NavBarSearch',
    components: {
        CardJobs
    }
}

</script>


<style scoped>
.bg-blue {
    background-color: #3a8ced;
    color: #fff;
}
.main-content {
                position: relative;
                left: 210px;
                margin: 0!important;
                padding: 0!important;
                width: calc(100vw - 225px);
                min-height: calc(50vh - 75px)!important
            }

            .main-content.collapsed {
                width: calc(100vw - 105px);
                left: 90px
            }

            #title-search {
                position: -webkit-sticky!important;
                position: sticky!important;
                top: 0;
                z-index: 1
            }

            #title-search.has-category {
                top: 20px
            }
</style>
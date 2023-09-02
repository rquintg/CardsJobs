<template>
    <div class="cardJobs">
        <div class="mx-auto container-fluid">
            <div class="row mt-2">
                <div class="px-0 col-12">
                    <div class="card job-card mb-3 border" v-for="(job, index) in jobs" :key="index">

                        <div class="p-2 p-md-3">
                            <div class="row align-items-center">
                                <div class="justify-content-center align-items-center col-md-1 col-3">
                                    <img v-bind:src="job.img" alt="Logo empresa" width="70" height="70" class="rounded">

                                </div>

                                <div class="col-md-11 col-9">
                                    <div class="row align-items-center">
                                        <div class="d-flex mb-2 col">
                                            <a href="#" class="text-dark stretched-link d-inline d-md-inline-flex"
                                                itemprop="url" target="_self">
                                                <h2 itemprop="title" class="job-title bold pl-md-2 pr-md-2 mb-0 pb-0 mx-2">
                                                    {{ job.name }}</h2>
                                                <section itemprop="skills"
                                                    class="pl-md-2 d-inline d-md-inline-flex align-items-center text-truncate">
                                                    <div class="skill-tag text-truncate border border-dark text-dark text-capitalize"
                                                        v-for="(skill, skillIndex) in job.skills" :key="skillIndex"
                                                        style="font-size: 0.8em; margin-bottom: 0px !important;">
                                                        <span></span>
                                                        {{ skill }}
                                                    </div>
                                                </section>
                                            </a>


                                        </div>

                                        <div class="row pl-md-2 mt-1 flex-column flex-md-row" style="font-size: 0.9em;">
                                            <div itemprop="hiringOrganization" itemscope="itemscope"
                                                itemtype="http://schema.org/Organization"
                                                class="text-truncate text-capitalize col">
                                                <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                                    role="img" aria-label="building" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" class="bi-building b-icon bi">
                                                    <g>
                                                        <path fill-rule="evenodd"
                                                            d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z">
                                                        </path>
                                                        <path
                                                            d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z">
                                                        </path>
                                                    </g>
                                                </svg>
                                                <span itemprop="name">
                                                    {{ job.company }}
                                                </span>
                                            </div>
                                            <div itemprop="jobLocation" itemscope="itemscope"
                                                itemtype="http://schema.org/Place" class="text-truncate col">
                                                <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                                    role="img" aria-label="geo alt" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" class="bi-geo-alt b-icon bi">
                                                    <g>
                                                        <path
                                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z">
                                                        </path>
                                                        <path
                                                            d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
                                                        </path>
                                                    </g>
                                                </svg>
                                                <span itemprop="name address">
                                                    {{ job.ubication }}
                                                </span>
                                            </div>
                                            <div itemprop="estimatedSalary baseSalary" class="text-truncate col">
                                                <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                                    role="img" aria-label="cash" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" class="bi-cash b-icon bi">
                                                    <g>
                                                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                                                        <path
                                                            d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z">
                                                        </path>
                                                    </g>
                                                </svg>
                                                <span>
                                                    {{ job.salary }}
                                                </span>
                                            </div>
                                            <div class="d-none d-md-inline-block col">
                                                <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                                    role="img" aria-label="people" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" class="bi-people b-icon bi">
                                                    <g>
                                                        <path
                                                            d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z">
                                                        </path>
                                                    </g>
                                                </svg>
                                                <span>
                                                    {{ job.vacancies }}
                                                </span>
                                            </div>
                                            <div class="text-truncate col">
                                                <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                                    role="img" aria-label="calendar3" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" class="bi-calendar3 b-icon bi">
                                                    <g>
                                                        <path
                                                            d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z">
                                                        </path>
                                                        <path
                                                            d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">
                                                        </path>
                                                    </g>
                                                </svg>
                                                <span itemprop="datePosted validThrough" class="sr-only">

                                                </span>
                                                <time>
                                                    {{ job.date }}
                                                </time>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import job from '../assets/json/data.json'
export default {
    name: 'CardJobs',
data() {
    return {
        jobs: job
    }
},
}
</script>

<style scoped>
a {
    text-decoration: none;
}
.job-title{
    font-size: 1.3rem;
    display: inline-block;
}
.job-card:hover {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.2)!important;
}
.skill-tag {
                border: 1px solid grey;
                border-radius: 10px;
                font-size: 12px;
                color: grey;
                text-transform: uppercase;
                -moz-text-align-last: left;
                text-align-last: left;
                display: inline-block;
                margin-right: 3px;
                margin-bottom: 3px;
                padding: 0 .5rem;
                pointer-events: none;
                cursor: pointer;
                transition: all .2s ease-in-out;
            }
</style>
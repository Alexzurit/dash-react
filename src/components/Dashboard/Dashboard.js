import React from "react";
import ChartComponent from './CharComponent';
import * as RutasGraphics from './../Rutas'; 
function Dashboard (){
    return(
        <>
        <h2 className="text-center text-bold">Hola a todos</h2>
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <div class="card flex-fill border-black border-2 mb-5">
                    <div class="card-header bg-info">
                        <p class="text-dark text-uppercase fw-bold text-center mb-0">
                            Cantidad Vendidas en la semana
                        </p>
                        <p class="card-subtitle text-muted text-center">
                            (los ultimos 7 días)
                        </p>
                    </div>
                    <div class="card-body p-0 d-flex flex-fill">
                    <ChartComponent />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div class="card flex-fill border-black border-2 mb-5">
                    <div class="card-header bg-info">
                        <p class="text-dark text-uppercase fw-bold text-center mb-0">
                            Cantidad Vendidas en la semana
                        </p>
                        <p class="card-subtitle text-muted text-center">
                            (los ultimos 7 días)
                        </p>
                    </div>
                    <div class="card-body p-0 d-flex flex-fill">
                    <ChartComponent />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div class="card flex-fill border-black border-2 mb-5">
                    <div class="card-header bg-info">
                        <p class="text-dark text-uppercase fw-bold text-center mb-0">
                            Cantidad Vendidas en la semana
                        </p>
                        <p class="card-subtitle text-muted text-center">
                            (los ultimos 7 días)
                        </p>
                    </div>
                    <div class="card-body p-0 d-flex flex-fill">
                    <ChartComponent />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div class="card flex-fill border-black border-2 mb-5">
                    <div class="card-header bg-info">
                        <p class="text-dark text-uppercase fw-bold text-center mb-0">
                            Cantidad Vendidas en la semana
                        </p>
                        <p class="card-subtitle text-muted text-center">
                            (los ultimos 7 días)
                        </p>
                    </div>
                    <div class="card-body p-0 d-flex flex-fill">
                    <RutasGraphics.BiaxialLineChar />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div class="card flex-fill border-black border-2 mb-5">
                    <div class="card-header bg-info">
                        <p class="text-dark text-uppercase fw-bold text-center mb-0">
                            Cantidad Vendidas en la semana
                        </p>
                        <p class="card-subtitle text-muted text-center">
                            (los ultimos 7 días)
                        </p>
                    </div>
                    <div class="card-body p-0 d-flex flex-fill">
                    <RutasGraphics.PiePieChartWithCustomizedLabel />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            <div class="card flex-fill border-black border-2 mb-5">
                    <div class="card-header bg-info">
                        <p class="text-dark text-uppercase fw-bold text-center mb-0">
                            Cantidad Vendidas en la semana
                        </p>
                        <p class="card-subtitle text-muted text-center">
                            (los ultimos 7 días)
                        </p>
                    </div>
                    <div class="card-body p-0 d-flex flex-fill">
                    <RutasGraphics.SimpleAreaChart />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;
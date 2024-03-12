<script>
  import { Pie } from 'vue-chartjs'
  import axios from "axios";

export default {
    extends: Pie,
    data () {
      return {
        chartData: {
          labels: null,
          datasets: [{
            borderWidth: 1,
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 50, 192, 1)'
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 50, 192, 0.2)'
            ],
            data: null
          }]
        },
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    },

    methods: {
      getPieChartData(){
        axios.get('financial-information-pie-chart').then((response) => {
          if(response.status == 200){
              this.chartData.labels = response.data.details.pieChartTitle;
              let stringArray  = response.data.details.pieChartValue;
              let nuevo = stringArray.map((i) => Number(i));
              this.chartData.datasets['0'].data = nuevo;
          }
        }).catch(error => console.log(error));
      },
    },
    created() {
      this.getPieChartData();
    }
  }
</script>

<style>
  canvas{
    width: 100%;
    height: 300px!important;
  }
</style>

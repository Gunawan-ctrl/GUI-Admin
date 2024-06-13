<template>
  <v-navigation-drawer v-model="drawer" app :width="300">
    <v-img
      src="/images/Kopi-background.png"
      class="pa-0 relative"
      cover
      height="150px"
    >
      <div class="absolute inset-0 flex flex-col bg-transparent ma-4">
        <v-avatar size="60" image="/icons/logo_gapari.png" />
        <div class="font-weight-bold">GUI Admin</div>
        <div
          class="text-capitalize text-overline text-brown-500"
          style="margin-top: -8px"
        >
          Administrator
        </div>
      </div>
    </v-img>

    <v-divider />

    <v-list nav class="text-black">
      <v-list-subheader style="font-size: 14px" class="text-black">
        MENU
      </v-list-subheader>
      <v-list-item
        color="brown"
        title="Dashboard"
        prepend-icon="mdi-view-dashboard-outline"
        value="dashboard"
        :to="{ name: 'dashboard' }"
      >
      </v-list-item>

      <v-list-subheader style="font-size: 14px" class="text-black">
        TABLE
      </v-list-subheader>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Table" prepend-icon="mdi-table">
          </v-list-item>
        </template>

        <v-list-item
          color="brown"
          title="Table Default"
          value="table Default"
          :to="{ name: 'tableDefault' }"
        >
        </v-list-item>
        <v-list-item
          color="brown"
          title="Table Pagination"
          value="table Pagination"
          :to="{ name: 'tablePagination' }"
        >
        </v-list-item>
      </v-list-group>

      <v-list-subheader style="font-size: 14px" class="text-black">
        CHARTS
      </v-list-subheader>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Chart"
            prepend-icon="mdi-chart-bar"
          >
          </v-list-item>
        </template>

        <v-list-item
          color="brown"
          title="ChartJS"
          value="chartJs"
          :to="{ name: 'chartJS' }"
        >
        </v-list-item>
        <v-list-item
          color="brown"
          title="ApexchartJS"
          value="apexchartJs"
          :to="{ name: 'apexchart' }"
        >
        </v-list-item>
        <v-list-item
          color="brown"
          title="EchartJS"
          value="echart"
          :to="{ name: 'echart' }"
        >
        </v-list-item>
      </v-list-group>

      <v-list-subheader style="font-size: 14px" class="text-black">
        COMPONENTS
      </v-list-subheader>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="UI Elements"
            prepend-icon="mdi-alpha-u-circle-outline"
          >
          </v-list-item>
        </template>

        <v-list-item color="brown" title="Button" value="tableDefault">
        </v-list-item>
        <v-list-item color="brown" title="Card" value="tablePagination">
        </v-list-item>
        <v-list-item color="brown" title="Dialog" value="tablePagination">
        </v-list-item>
        <v-list-item color="brown" title="Notify" value="tablePagination">
        </v-list-item>
        <v-list-item color="brown" title="Tab" value="tablePagination">
        </v-list-item>
      </v-list-group>

      <v-list-item
        color="brown"
        title="Forms"
        prepend-icon="mdi-alpha-f-circle-outline"
        value="forms"
      >
      </v-list-item>

      <v-list-subheader style="font-size: 14px" class="text-black">
        PAGES
      </v-list-subheader>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Auth" prepend-icon="mdi-bookmark">
          </v-list-item>
        </template>

        <v-list-item
          color="brown"
          title="Login"
          value="login"
          :to="{ name: 'login' }"
        >
        </v-list-item>
        <v-list-item color="brown" title="Register" value="tablePagination">
        </v-list-item>
      </v-list-group>

      <v-list-item
        color="brown"
        title="Blank Page"
        prepend-icon="mdi-alpha-b-circle-outline"
        value="blank"
        :to="{ name: 'blank' }"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      dataUser: JSON.parse(localStorage.getItem("dataUser")),
    };
  },
};
</script>

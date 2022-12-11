<template>
  <div class="q-mt-md">
    <q-table :columns="columns"
             table-class="screenwide"
             :rows="rows" 
             @row-click="update"
     >
    

     <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn color="red-14" @click="view(props.row)" title="unlock"><i class="fa fa-lock"></i></q-btn>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script>
  export default {
    data: () => ({
      columns: [
        { name: 'reference', align: 'left', label: 'REFERENCE CODE', field: 'reference', sortable: true },
        { name: 'type', align: 'left', label: 'TYPE OF APPLICATION', field: 'type', sortable: true, },
        { name: 'company_name', align: 'left', label: 'COMPANY NAME', field: 'company_name', sortable: true, },
        { name: 'brand', align: 'left', label: 'BRAND', field: 'brand', sortable: true, },
        { name: 'product', align: 'left', label: 'PRODUCT', field: 'product', sortable: true, },
        { name: 'type_of_medium', align: 'left', label: 'TYPE OF MEDIUM', field: 'type_of_medium', sortable: true, },
        { name: 'status', align: 'left', label: 'APP STATUS', field: 'status', sortable: true, },
        { name: 'payment_status', align: 'left', label: 'PAYMENT STATUS', field: 'payment_status', sortable: true, },
        { name: 'internal_status', align: 'left', label: 'INTERNAL STATUS', field: 'internal_status', sortable: true, },
        { name: 'actions', align: 'left', label: '', field: 'actions', sortable: true, },
      ],
      rows: [
        {
          id: 1,
          reference: "APP-1234",
          type: "Individual",
          company_name: "SAMPLE COMP NAME",
          brand: "SAMPLE BRAND NAME",
          product: "SAMPLE PROD NAME",
          type_of_medium: "TEST TYPE OF MEDIUM",
          status: "active",
          payment_status: "unpaid",
          internal_status: "goods",
        }
      ]
    }),

    methods: {
      update(e, row) {
        this.selected_item = row;
        console.log(this.$router);
        this.$router.push({ name: "individual-application-update", params: { id: row.id } });
      },
    }
  }
</script>

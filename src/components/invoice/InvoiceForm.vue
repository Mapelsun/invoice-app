<template>
  <form class="form" @submit.prevent="submitForm">
    <h3>New Invoice</h3>
    <div class="sender">
      <p>Bill From</p>
      <div class="form__group">
        <label for="senderAddress" class="form__label">Street Address</label>
        <input
          type="text"
          id="senderAddress"
          name="senderAddress"
          class="form__input"
          v-model.lazy="$v.form.senderAddress.street.$model"
          :class="{
            'is-invalid': submitted && $v.form.senderAddress.street.$error,
          }"
        />
        <small
          class="error"
          v-if="submitted && !$v.form.senderAddress.street.required"
          >Street address is required</small
        >
      </div>
      <div class="form__row">
        <div class="form__group">
          <label for="senderCity" class="form__label">City</label>
          <input
            type="text"
            id="senderCity"
            name="senderCity"
            class="form__input"
            v-model.lazy="$v.form.senderAddress.city.$model"
            :class="{
              'is-invalid': submitted && $v.form.senderAddress.city.$error,
            }"
          />
          <small
            class="error"
            v-if="submitted && !$v.form.senderAddress.city.required"
            >City is required</small
          >
        </div>
        <div class="form__group">
          <label for="senderPostCode" class="form__label">Post Code</label>
          <input
            type="text"
            id="senderPostCode"
            name="senderPostCode"
            class="form__input"
            v-model.lazy="$v.form.senderAddress.postCode.$model"
            :class="{
              'is-invalid': submitted && $v.form.senderAddress.postCode.$error,
            }"
          />
          <small
            class="error"
            v-if="submitted && !$v.form.senderAddress.postCode.required"
            >Post Code is required</small
          >
        </div>
        <div class="form__group">
          <label for="senderCountry" class="form__label">Country</label>
          <input
            type="text"
            id="senderCountry"
            name="senderCountry"
            class="form__input"
            v-model.lazy="$v.form.senderAddress.country.$model"
            :class="{
              'is-invalid': submitted && $v.form.senderAddress.country.$error,
            }"
          />
          <small
            class="error"
            v-if="submitted && !$v.form.senderAddress.country.required"
            >Country is required</small
          >
        </div>
      </div>
    </div>

    <div class="receiver">
      <p>Bill To</p>
      <div class="form__group">
        <label for="receiverName" class="form__label">Client's Name</label>
        <input
          type="text"
          id="receiverName"
          name="receiverName"
          class="form__input"
          v-model.lazy="$v.form.clientName.$model"
          :class="{
            'is-invalid': submitted && $v.form.clientName.$error,
          }"
        />
        <small class="error" v-if="submitted && !$v.form.clientName.required"
          >Client's name is required</small
        >
      </div>
      <div class="form__group">
        <label for="receiverEmail" class="form__label">Client's Email</label>
        <input
          type="email"
          id="receiverEmail"
          name="receiverEmail"
          class="form__input"
          placeholder="e.g. email@example.com"
          v-model.lazy="$v.form.clientEmail.$model"
          :class="{
            'is-invalid': submitted && $v.form.clientEmail.$error,
          }"
        />
        <small class="error" v-if="submitted && !$v.form.clientEmail.required"
          >Client's email is required</small
        >
      </div>
      <div class="form__group">
        <label for="receiverAddress" class="form__label">Street Address</label>
        <input
          type="text"
          id="receiverAddress"
          name="receiverAddress"
          class="form__input"
          v-model.lazy="$v.form.clientAddress.street.$model"
          :class="{
            'is-invalid': submitted && $v.form.clientAddress.street.$error,
          }"
        />
        <small
          class="error"
          v-if="submitted && !$v.form.clientAddress.street.required"
          >Client's street address is required</small
        >
      </div>
      <div class="form__row">
        <div class="form__group">
          <label for="receiverCity" class="form__label">City</label>
          <input
            type="text"
            id="receiverCity"
            name="receiverCity"
            class="form__input"
            v-model.lazy="$v.form.clientAddress.city.$model"
            :class="{
              'is-invalid': submitted && $v.form.clientAddress.city.$error,
            }"
          />
          <small
            class="error"
            v-if="submitted && !$v.form.clientAddress.city.required"
            >Client's city is required</small
          >
        </div>
        <div class="form__group">
          <label for="receiverPostCode" class="form__label">Post Code</label>
          <input
            type="text"
            id="receiverPostCode"
            name="receiverPostCode"
            class="form__input"
            v-model.lazy="$v.form.clientAddress.postCode.$model"
            :class="{
              'is-invalid': submitted && $v.form.clientAddress.postCode.$error,
            }"
          />
          <small
            class="error"
            v-if="submitted && !$v.form.clientAddress.postCode.required"
            >Client's Post Code is required</small
          >
        </div>
        <div class="form__group">
          <label for="receiverCountry" class="form__label">Country</label>
          <input
            type="text"
            id="receiverCountry"
            name="receiverCountry"
            class="form__input"
            v-model.lazy="$v.form.clientAddress.country.$model"
            :class="{
              'is-invalid': submitted && $v.form.clientAddress.country.$error,
            }"
          />
          <small
            class="error"
            v-if="submitted && !$v.form.clientAddress.country.required"
            >Client's country is required</small
          >
        </div>
      </div>
      <div class="form__row">
        <div class="form__group">
          <label for="invoiceDate" class="form__label">Invoice Date</label>
          <input
            type="date"
            id="invoiceDate"
            name="invoiceDate"
            class="form__input"
            v-model.lazy="$v.form.createdAt.$model"
            :class="{
              'is-invalid': submitted && $v.form.createdAt.$error,
            }"
          />
          <small class="error" v-if="submitted && !$v.form.createdAt.required"
            >Invoice date is required</small
          >
        </div>
        <div class="form__group">
          <label for="paymentTerms" class="form__label">Payment Terms</label>
          <select
            class="form__input"
            v-model.lazy="$v.form.paymentTerms.$model"
            name="paymentTerms"
            id="paymentTerms"
            :class="{
              'is-invalid': submitted && $v.form.paymentTerms.$error,
            }"
          >
            <option disabled value="">Select Payment Terms</option>
            <option v-for="(data, index) in terms" :key="index" :value="data">
              Net {{ data }} day{{ data !== 1 ? "s" : "" }}
            </option>
          </select>
          <small
            class="error"
            v-if="submitted && !$v.form.paymentTerms.required"
            >Payment terms is required</small
          >
        </div>
      </div>
      <div class="form__group">
        <label for="description" class="form__label">Project Description</label>
        <input
          type="text"
          id="description"
          name="description"
          class="form__input"
          placeholder="e.g. Graphic Design Service"
          v-model.lazy="$v.form.description.$model"
          :class="{
            'is-invalid': submitted && $v.form.description.$error,
          }"
        />
        <small class="error" v-if="submitted && !$v.form.description.required"
          >Description is required</small
        >
      </div>
    </div>

    <div class="lists">
      <h2 class="lists__header">Item List</h2>
      <div class="lists__headings">
        <p>Item name</p>
        <p>Qty.</p>
        <p>Price</p>
        <p>Total</p>
      </div>
      <div
        class="lists__group"
        v-for="(item, index) in form.items"
        :key="index"
      >
        <div class="form__group">
          <label for="itemName" class="form__label">
            <input
              type="text"
              id="itemName"
              name="itemName"
              class="form__input"
              v-model.lazy="item.name"
            />
          </label>
        </div>
        <div class="form__group">
          <label for="itemQuantity" class="form__label">
            <input
              type="text"
              id="itemQuantity"
              name="itemQuantity"
              class="form__input"
              v-model.number.lazy="item.quantity"
            />
          </label>
        </div>
        <div class="form__group">
          <label for="itemPrice" class="form__label">
            <input
              type="text"
              id="itemPrice"
              name="itemPrice"
              class="form__input"
              v-model.number.lazy="item.price"
            />
          </label>
        </div>
        <div class="form__group">
          <label for="itemTotal" class="form__label">
            <input
              type="text"
              id="itemTotal"
              name="itemTotal"
              class="form__input no-bg"
              disabled
              v-model.number.lazy="item.total"
            />
          </label>
        </div>
        <img
          src="@/assets/icon-delete.svg"
          alt="delete icon"
          @click="removeItem(item)"
        />
      </div>
      <app-button class="lists__btn" type="edit" @click.native="addItem">
        <img src="@/assets/icon-plus.svg" alt="plus icon" />
        <p>Add New Item</p>
      </app-button>
      <small class="error" v-if="submitted && form.items.length === 0"
        >At least 1 item is required</small
      >
    </div>
  </form>
</template>

<script>
import dayjs from "dayjs";
import ActionButton from "@/components/shared/ActionButton";
import { required, email, numeric } from "vuelidate/lib/validators";
export default {
  name: "invoiceForm",
  components: {
    "app-button": ActionButton,
  },
  data() {
    return {
      submitted: false,
      form: {
        createdAt: "",
        description: "",
        paymentTerms: "",
        clientName: "",
        clientEmail: "",
        senderAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        clientAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        items: [],
      },
      terms: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
    };
  },
  validations: {
    form: {
      createdAt: { required },
      description: { required },
      paymentTerms: { required, numeric },
      clientName: { required },
      clientEmail: { required, email },
      senderAddress: {
        street: { required },
        city: { required },
        postCode: { required },
        country: { required },
      },
      clientAddress: {
        street: { required },
        city: { required },
        postCode: { required },
        country: { required },
      },
    },
  },
  watch: {
    "form.items": {
      handler: function (newValue) {
        if (newValue.length !== 0) {
          newValue.forEach((item) => (item.total = item.quantity * item.price));
        }
        console.log(newValue[0].name);
      },
      deep: true,
    },
  },
  methods: {
    addItem() {
      const checkEmptyLines = this.form.items.filter(
        (item) => item.name === null
      );

      if (checkEmptyLines.length >= 1 && this.form.items.length > 0) {
        return;
      }

      this.form.items.push({
        name: null,
        quantity: null,
        price: null,
        total: null,
      });
    },
    removeItem(val) {
      this.form.items = this.form.items.filter((item) => item !== val);
    },
    generateId() {
      let texts = "";
      let digits = "";

      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbers = "0123456789";

      for (let i = 0; i < 2; i++) {
        texts += letters.charAt(Math.floor(Math.random() * letters.length));
      }

      for (let i = 0; i < 4; i++) {
        digits += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }

      return texts + digits;
    },
    addDays(presentDate, days) {
      const date = new Date(presentDate);
      const futureDate = new Date(date.setDate(date.getDate() + days));
      return dayjs(futureDate).format("YYYY-MM-DD");
    },
    getStatus(type) {
      let modifiedStatus;
      switch (type) {
        case "draft":
          modifiedStatus = "draft";
          break;
        case "send":
          modifiedStatus = "pending";
          break;
        case "done":
          modifiedStatus = "paid";
          break;
      }
      return modifiedStatus;
    },
    calcTotal(arr) {
      return arr.reduce(
        (accumulator, current) => accumulator + current.total,
        0
      );
    },
    submitForm(type) {
      if (type === "draft") {
        const payload = {
          ...this.form,
          id: this.generateId(),
          paymentDue: "",
          status: this.getStatus(type),
          total: "",
        };

        console.log("draft-form-data", payload);
      } else if (type === "send") {
        this.submitted = true;
        this.$v.form.$touch();
        if (this.$v.form.$invalid) {
          return;
        }

        const payload = {
          ...this.form,
          id: this.generateId(),
          paymentDue: this.addDays(this.form.createdAt, this.form.paymentTerms),
          status: this.getStatus(type),
          total: +this.calcTotal(this.form.items),
        };

        console.log("save-form-data", payload);
        console.table("save-form-data", payload);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 1rem;
  margin-right: 3rem;
  h3 {
    margin-bottom: 4rem;
  }
  p {
    color: var(--clr-accent-purple);
    margin-bottom: 2rem;
  }
  &__group {
    margin-bottom: 1.5rem;
  }
  &__label {
    display: block;
    margin-bottom: 0.3rem;
    color: var(--clr-grey-three);
  }
  &__input {
    width: 100%;
    border: none;
    background: var(--clr-bg-dark-four);
    border-radius: 0.5rem;
    font-size: normal;
    font-weight: normal;
    padding: 1.1em;
    outline: none;
    color: var(--var-white);
    font-family: "Spartan", sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 0.25;
    &:active,
    &:focus {
      outline: 2px solid var(--clr-accent-purple);
    }
  }
  &__row {
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
    gap: 1.5rem;
    & > * {
      flex: 1;
    }
  }
  .receiver {
    margin-bottom: 3rem;
  }
  .lists {
    &__headings,
    &__group {
      display: grid;
      grid-template-columns: 0.4fr 0.1fr repeat(2, 0.2fr) 0.1fr;
      align-items: center;
      gap: 1rem;
    }
    &__header {
      color: var(--clr-grey-one);
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    &__headings {
      margin-bottom: 0.8rem;
      p {
        color: var(--clr-grey-three);
        margin-bottom: 0rem;
        font-weight: medium;
      }
    }
    &__group {
      img {
        cursor: pointer;
        margin-bottom: 1.5rem;
      }
    }
    &__btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        color: var(--clr-white);
        margin-bottom: 0rem;
        font-size: 1rem;
      }
      img {
        fill: var(--clr-white);
      }
    }
  }
  .no-bg {
    background: none;
  }
}

// Validations
.error {
  color: var(--clr-accent-red);
  font-size: 0.9rem;
  font-style: italic;
  font-weight: 300;
}

.is-invalid {
  border: 1px solid var(--clr-accent-red);
}
</style>

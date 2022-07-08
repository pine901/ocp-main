<template>
  <vs-dialog prevent-close class="bigPanel" square v-model="isContactModal" not-close>
    <div class="displayName">
      <vs-row justify="space-between">
        <div class="name">
          <vs-col>
            <div
              style="font-size: 1.5vw;
             color: #0077aa; text-align: start"
            >
              Name
            </div>
            <div
              :class="status === 'name' ? ['nameTrueDisplay'] : ['numberDisplay']"
              @click="inputName"
            >
              <vs-row>
                <vs-col w="9">
                  <div class="numberInputPan">
                    <p style="margin-top: 2vh">{{ name }}</p>
                  </div>
                </vs-col>
                <vs-col w="3">
                  <div class="backspacename">
                    <font-awesome-icon
                      style=" font-size: 3vw; "
                      icon="backspace"
                      @click="removeName"
                    />
                  </div>
                </vs-col>
              </vs-row>
            </div>
          </vs-col>
        </div>
        <div class="number">
          <vs-col>
            <div
              style="font-size: 1.5vw;
             color: #0077aa; text-align: start"
            >
              Number
            </div>
            <div
              :class="status === 'number' ? ['numberTrueDisplay'] : ['numberDisplay']"
              @click="inputNumber"
            >
              <vs-row>
                <vs-col w="9">
                  <div class="numberInputPan">
                    <p style="margin-top: 2vh">{{ number }}</p>
                  </div>
                </vs-col>
                <vs-col w="3">
                  <div class="backspacename">
                    <font-awesome-icon
                      style=" font-size: 3vw; "
                      icon="backspace"
                      @click="removeNumber"
                    />
                  </div>
                </vs-col>
              </vs-row>
            </div>
          </vs-col>
        </div>
      </vs-row>
      <vs-row style="margin-top: 0px">
        <vs-col w="4">
          <vs-button
            @click="addUser"
            style="height: 7vh; width: 21vw; background-color: #003355; color: #0077aa; font-size: 1.5vw"
            square
          >
            <font-awesome-icon
              style="color: #04a1f9; font-size: 2.5vw; margin-right: 2vw"
              icon="user-plus"
            />
            Add
          </vs-button>
        </vs-col>
        <vs-col w="4">
          <vs-button
            style="height: 7vh; width: 21vw; background-color: #003355; color: #0077aa; font-size: 1.5vw"
            @click="editUser"
            square
          >
            <font-awesome-icon
              style="color: #04a1f9; font-size: 2.5vw; margin-right: 2vw"
              icon="user-edit"
            />
            Edit
          </vs-button>
        </vs-col>
        <vs-col w="4">
          <vs-button
            style="height: 7vh; width: 21vw; background-color: #003355; color: #0077aa; font-size: 1.5vw"
            @click="deleteUser"
            square
          >
            <font-awesome-icon
              style="color: #04a1f9; font-size: 2.5vw; margin-right: 2vw"
              icon="user-minus"
            />
            Delete
          </vs-button>
        </vs-col>
      </vs-row>
    </div>
    <div class="numberCtr">
      <vs-row justify="space-between">
        <div class="contactDisplay">
          <li
            v-for="(item, index) in nameList"
            :key="index"
            @click="selectUser(item)"
            style="cursor: pointer"
          >
            {{ item.name }}
          </li>
        </div>
        <div class="inputCtr">
          <div>
            <vs-row justify="space-between">
              <vs-button
                @click="add(item)"
                square
                v-for="(item, index) in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']"
                :key="index"
                style="background-color: #003355; color: #0077aa; height: 9vh; width: 5.1vw; font-size: 2vw; margin: 0"
                >{{ item }}</vs-button
              >
            </vs-row>
          </div>
          <div style="margin-top: 1.5vh">
            <vs-row justify="space-between">
              <vs-button
                @click="add(item)"
                square
                v-for="(item, index) in ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']"
                :key="index"
                style="background-color: #003355; color: #0077aa; height: 9vh; width: 5.1vw; font-size: 2vw; margin: 0"
                >{{ item }}</vs-button
              >
            </vs-row>
          </div>
          <div style="padding-right: 2vw; padding-left: 2vw; margin-top: 1.5vh">
            <vs-row justify="space-around">
              <vs-button
                @click="add(item)"
                square
                v-for="(item, index) in ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']"
                :key="index"
                style="background-color: #003355; color: #0077aa; height: 9vh; width: 5.1vw; font-size: 2vw; margin:0"
                >{{ item }}</vs-button
              >
            </vs-row>
          </div>
          <div style="padding-right: 8vw; padding-left: 8vw; margin-top: 1.5vh">
            <vs-row justify="space-around">
              <vs-button
                square
                @click="add(item)"
                v-for="(item, index) in ['Z', 'X', 'C', 'V', 'B', 'N', 'M']"
                :key="index"
                style="background-color: #003355; color: #0077aa; height: 9vh; width: 5.1vw; font-size: 2vw; margin:0"
                >{{ item }}</vs-button
              >
            </vs-row>
          </div>
          <div style="margin-top: 1.5vh">
            <vs-row justify="space-between">
              <vs-button
                @click="add('-')"
                square
                style="background-color: #003355; color: #0077aa; height: 9vh; width: 11vw; font-size: 2vw; margin: 0"
                >-</vs-button
              >
              <vs-button
                @click="add(' ')"
                square
                style="background-color: #003355; color: #0077aa; height: 9vh; width: 34vw; font-size: 2vw; margin: 0"
              ></vs-button>
              <vs-button
                @click="add('.')"
                square
                style="background-color: #003355; color: #0077aa; height: 9vh; width: 11vw; font-size: 2vw; margin: 0"
                >.</vs-button
              >
            </vs-row>
          </div>
        </div>
      </vs-row>
    </div>
    <vs-button
      style="position: absolute;top: 0.3vh; right: 0.5vw; background-color: #003357;height: 10vh; width: 6vw"
      square
      @click="closeContactModal"
    >
      <vs-col>
        <font-awesome-icon style="color: #04a1f9; font-size: 3vw" icon="reply" />
        <div style="font-size: 1vw; color: #04a1f9;">Back</div>
      </vs-col>
    </vs-button>
    <div class="contactBotitle">
      Phone Book Control Panel
    </div>
  </vs-dialog>
</template>
<script>
import moment from 'moment';
import store from '../../store';
export default {
  data() {
    return {
      name: '',
      status: 'name',
      number: '',
      nameList: [
        {
          name: 'AYDOGAN',
          number: '894648485',
        },
      ],
      selectedUser: '',
    };
  },
  props: ['isContactModal', 'setContactModal'],
  methods: {
    closeContactModal() {
      this.setContactModal(false);
    },
    inputName() {
      this.status = 'name';
    },
    inputNumber() {
      this.status = 'number';
    },
    add(item) {
      if (this.status === 'name') {
        this.name = this.name + item;
      } else {
        this.number = this.number + item;
      }
    },
    removeNumber() {
      this.number = this.number.slice(0, -1);
    },
    removeName() {
      this.name = this.name.slice(0, -1);
    },
    addUser() {
      if (this.name === '' && this.number === '') {
        alert('Please enter Name of Number');
      } else {
        this.nameList.push({
          name: this.name,
          number: this.number,
        });
        this.name = '';
        this.number = '';
        const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
        store.dispatch('registerEvent', {
          date,
          val: 'User is added',
        });
      }
    },
    selectUser(user) {
      this.selectedUser = user;
      this.name = user.name;
      this.number = user.number;
    },
    deleteUser() {
      console.log('selectedUser =', this.selectedUser.name);
      const selectedUser = this.selectedUser.name;

      this.nameList = this.nameList.filter(item => item.name !== selectedUser);
      const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
      store.dispatch('registerEvent', {
        date,
        val: 'User is deleted',
      });
      this.name = '';
      this.number = '';
    },
    editUser() {
      const selectedUser = this.selectedUser.name;
      const editUser = { name: this.name, number: this.number };
      this.nameList = this.nameList.map(u => (u.name !== selectedUser ? u : editUser));
      alert('update Succesful');
      this.name = '';
      this.number = '';
    },
  },
};
</script>
<style>
@import '../../assets/css/custom_dialog1.css';
.displayName {
  width: 65vw;
  height: 20vh;
}
.name {
  width: 32vw;
}
.number {
  width: 32vw;
}
.numberDisplay {
  background-color: #001111;
  color: #04a1f9;
  width: 32vw;
  height: 7vh;
  border: solid #2b2b3b 0.2vh;
  font-size: 2vw;
}
.nameTrueDisplay {
  background-color: #001111;
  color: #04a1f9;
  width: 32vw;
  height: 7vh;
  border: solid #6a6acc 0.2vh;
  font-size: 2vw;
}
.numberTrueDisplay {
  background-color: #001111;
  color: #04a1f9;
  width: 32vw;
  height: 7vh;
  border: solid #7f7fd6 0.2vh;
  font-size: 2vw;
}
.backspacename {
  width: 8vw;
  height: 7vh;
  padding-top: 1vh;
  margin-left: 1vw;
}
.numberCtr {
  width: 86vw;
  height: 52vh;
}
.contactDisplay {
  width: 26vw;
  height: 52vh;
  background-color: #001111;
  border: solid #2b2b3b 0.2vh;
  text-align: left;
  color: #0077aa;
}
.inputCtr {
  width: 59vw;
  height: 52vh;
}
.contactBotitle {
  font-size: 1.5vw;
  color: #0077aa;
  position: absolute;
  right: 1vw;
}
</style>

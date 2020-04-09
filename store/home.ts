import { Mutation, VuexModule, Module } from 'vuex-module-decorators';

export interface i_home {
  household: string;
  family: string;
  money1: number;
  money2: number;
}

@Module({ stateFactory: true, namespaced: true, name: 'home' })
export default class Home extends VuexModule implements i_home {
  household: string = '0';
  family: string = '0';
  money1: number = 1;
  money2: number = 1;

  @Mutation
  set_household(household: string) {
    this.household = household;
  }

  @Mutation
  set_family(family: string) {
    this.family = family;
  }

  @Mutation
  set_money1(money1: number) {
    this.money1 = money1;
  }

  @Mutation
  set_money2(money2: number) {
    this.money2 = money2;
  }
}

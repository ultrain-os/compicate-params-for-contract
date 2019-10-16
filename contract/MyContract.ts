import { Contract } from 'ultrain-ts-lib/src/contract';
import { ComplicateParams, SimpleParams } from './ComplicateParams';

class MyContract extends Contract {

  @action("pureview")
  complicateParams(cp: ComplicateParams, sp: SimpleParams): string {
   return cp.say() + "  " + sp.say();
  }
}

<script>
import TaperedRule from './TaperedRule.svelte';
export let str,dex,con,int,wis,cha;
</script>
<TaperedRule></TaperedRule>
<div class="abilities">
 <slot></slot>
 {str}, {dex}, {con}, {int}, {wis}, {cha}
</div>
<TaperedRule></TaperedRule>
<template>
    <div class="el-table el-table--fit el-table--border ">
        <div class="el-table__body-wrapper is-scrolling-none">
            <table cellspacing="0" cellpadding="0" border="0" class="targetModel el-table__body" style="width: 100%">
                <tbody>
                <tr class="">
                    <td rowspan="2" width="250" >单位履行消防安全职责情况</td>
                    <td width="180">合法性</td>
                    <td>
                        <div><label class="el-form-item__label">被查建筑物名称：</label><input type="text" autocomplete="off" placeholder="请输入" class="el-form-item__content el-input__inner" style="width: 300px!important;"/></div>
                        <div><input type="checkbox" class="el-checkbox-button"/><label class="el-checkbox__label">1998年9月1日之前竣工建筑且此后来改建（含建筑、用途变更）</label></div>
                        <div><input type="checkbox" class="el-checkbox-button"/><label class="el-checkbox__label">依法通过消防验收</label></div>
                        <div><input type="checkbox" class="el-checkbox-button"/><label class="el-checkbox__label">依法进行竣工验收消防备案</label></div>
                        <div><label class="el-form-item__label">其他情况：</label><input type="text" autocomplete="off" placeholder="请输入" class="el-form-item__content el-input__inner" style="width: 300px!important;"/></div>
                        <div><input type="radio" class="el-radio-button" name="radio1"/>是&nbsp;&nbsp;<input type="radio" class="el-radio-button" name="radio1"/>否 <label class="el-radio__label">公众聚集场所</label></div>
                        <div><input type="radio" class="el-radio-button" name="radio2"/>是&nbsp;&nbsp;<input type="radio" class="el-radio-button" name="radio2" />否 <label class="el-radio__label">依法通过投入使用、营业前消防安全检查</label></div>
                    </td>
                </tr>
                <tr class="">
                    <td>消防安全管理</td>
                    <td>
                        <div><input type="radio" class="el-radio-button" name="radio3"/>是&nbsp;&nbsp;<input type="radio" class="el-radio-button" name="radio3"/>否 <label class="el-radio__label">消防安全制度</label></div>
                        <div><input type="radio" class="el-radio-button" name="radio4"/>是&nbsp;&nbsp;<input type="radio" class="el-radio-button" name="radio4"/>否 <label class="el-radio__label">员工消防安全教育培训</label></div>
                        <div><input type="radio" class="el-radio-button" name="radio5"/>是&nbsp;&nbsp;<input type="radio" class="el-radio-button" name="radio5"/>否 <label class="el-radio__label">防火检查</label></div>
                        <div><input type="radio" class="el-radio-button" name="radio6"/>是&nbsp;&nbsp;<input type="radio" class="el-radio-button" name="radio6"/>否 <label class="el-radio__label">灭火和应急疏散预案</label></div>
                        <div><input type="radio" class="el-radio-button" name="radio7"/>是&nbsp;&nbsp;<input type="radio" class="el-radio-button" name="radio7"/>否 <label class="el-radio__label">消防演练</label></div>
                        <div><input type="radio" class="el-radio-button" name="radio8"/>是&nbsp;&nbsp;<input type="radio" class="el-radio-button" name="radio8"/>否 <label class="el-radio__label">消防控制室是否有人值班，人员是否持有相关证件</label></div>
                        <div><input type="radio" class="el-radio-button" name="radio9"/>是&nbsp;&nbsp;<input type="radio" class="el-radio-button" name="radio9"/>否 <label class="el-radio__label">公众聚集场所是否违反规定使用明火作业</label></div>
                        <div><input type="radio" class="el-radio-button" name="radio10"/>是&nbsp;&nbsp;<input type="radio" class="el-radio-button" name="radio10"/>否 <label class="el-radio__label">违规用火用电用气，经营场所电器线路敷设未穿阻燃线管保护，用火线入口端没有安装漏电开关</label></div>
                        <div><label class="el-form-item__label">其他情况：</label><input type="text" autocomplete="off" placeholder="请输入" class="el-form-item__content el-input__inner" style="width: 300px!important;"/></div>
                    </td>
                </tr>
                <tr class="">
                    <td>责令更改情况</td>
                    <td colspan="2">制发的法律文书名称和编号：<input type="text" autocomplete="off" placeholder="请输入" class="el-form-item__content el-input__inner" style="width: 300px!important;"/></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'target-model',
        data() {
            return {

            }
        }
    }
</script>
<style>
    table.targetModel.el-table__body>tbody>tr>td {
        padding-left: 10px !important;
    }
</style>


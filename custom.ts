
enum selecttntblocks {
    //% blockIdentity="selecttntblocks.block" enumval=46 block="TNT"
    //% jres alias=TNT
    TNT = 46,
    //% blockIdentity="selecttntblocks.block" enumval=0 block="空気"
    //% jres alias=AIR
    Air = 0
}

//% weight=999 color=#c71585 icon="\uf1b3"
//% block="体験\n（たいけん）"
namespace inspiration_island {
    //% weight=90
    //% blockId=tpToSite1
    //% block="地点（ちてん）１へテレポート"
    export function tpToSite1() {
        /*player.teleport(world(-21, 0, 0));*/
        player.execute("tp @s 87 145 207 -90 0");/*(87 145 207)へテレポートし、東を向かせる*/
    }
    
}

namespace blocks {
    //% weight=70
    //% blockId=selectTntBlock
    //% block="$block"
    //% block.fieldEditor="gridpicker"
    //% block.fieldOptions.width=340
    //% block.fieldOptions.columns=8
    //% block.fieldOptions.tooltips=true
    //% block.fieldOptions.tooltipsXOffset="20"
    //% block.fieldOptions.tooltipsYOffset="-20"
    //% block.fieldOptions.maxRows="8"
    //% block.fieldOptions.hasSearchBar=true
    //% block.fieldOptions.hideRect=true
    export function selectTntBlock(block: selecttntblocks): number {
        return block;
    }
}

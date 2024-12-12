
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

var GAME_LEVELS = [
  ["                                                                               ",
   "                                                                               ",
   "                                                                               ",
   "                                                                               ",
   "                                                                               ",
   "                                                                               ",
   " x                                                                          x  ",
   " x                                                                      o   x  ",
   " x                                            o                   o         x  ",
   " x                                         o                            o   x  ",
   " x                           xxxxx      o         o   o   o     xxxxx       x  ",
   " x                           xvvvx               xxx xxx xxx    xx!xx   o   x  ",
   " x                                     o                        x!!!x       x  ",
   " x                                 o o                          xxvxx   o   x  ",
   " x                                xxxxx                                     x  ",
   " x                                 !!!     o  o o o o o o o o           o   x  ",
   " x                                  v     xxx x x x x x x x x x             x  ",
   " x                                                                      o   x  ",
   " x                                                                o         x  ",
   " x                                                              xxxxx   o   x  ",
   " x    @    o   o   o   o   o                                                x  ",
   " xxxxxxxxxxxxxxxxx xx xxx xx x                            xxxxxxx   xxxxxxxxx  ",
   "                             x!!!x     o  o  o  o   x!!!!!x                    ",
   "                             x!!!xxxx xx xx xx xx xxx!!!!!x                    ",
   "                             xxxxx                  xxxxxxx                    ",
   "                                                                               ",
   "                                                                               ",
   "                                                                               "],
 
  ["                                                                  xxxxxxx                                   x!x  ",
   "                                                               xxxx     xxxx                                x!x  ",
   "                                      xxxxxxxxxxxxx           xx           xx                               x!x  ",
   "                                      xx==========xx         xx   =======   xx                              x!x  ",
   "                                       xxxxxxxxxx==x         x    o     o                                   x!x  ",
   "                                                 x=x         x                                  o  o  o  o xx!x  ",
   "                                                 x=x         x       d                       xxxxxxxxxxxxxxx!!x  ",
   "                                xxxxx            xvx         x   xxxxxxxxx                    ==============xx   ",
   "                                x!!!x                        xx  !!!!!!!!!  xx             xxxxxxxxxxxxxxxxxxxx  ",
   "                                x!v!x                   o     xx  !!!!!!!! xx      o                             ",
   "                                                     o     o  vxxxx !!!! xxxv     xxx                            ",
   "                                               x     x            xxxxxxx                 o                      ",
   "                                               x     x     o                            xxxx                     ",
   "                                               x     x                                    !x                     ",
   "                                               xo    x     o         o    o               !x                     ",
   "                                               xx    !                                  o !x                     ",
   "                 o o                           x     x                xx xxo            xxx!x                    ",
   "               xxxxxxx        xxx   xxx        x     x     o  o  o    x   x                !x                    ",
   "              xx     xx         x o x          x    ox    xx  x  xx   x    o               !x                    ",
   "             xx       xx        x   x          !    xx                x                 o  !x                    ",
   "     @       x         x        x   x          x     xxx              x                xxxx!x                    ",
   "    xxx      x         x        x o x          x     x                x                    !x                    ",
   "    x x      x         x       xx   xx         xo    x      xxxxxx    x                    !x                    ",
   "sss    ssssssx         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!xx    x         o o       =!x                    ",
   "                       x!!!!!xx       xxxxxxxxxx    ox!!!!!!!xx!xxxxxxsssssxxxxxxxxxxxsssssxx                    ",
   "                       x!!!!!x                      xx!!!!!!xx !                                                 ",
   "                       x!!!!!x=        o  o  o  o   x!!!!!!xx  !                                                 ",
   "                       x!!!!!xx   s   xxx xx xx xx x!!!!!!xx   !                                                 ",
   "                       x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                 ",
   "                       x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                 "],
  
  ["                                                                                                     ",
   "                                                                                                     ",
   "                                                                                                     ",
   "                                                                                                     ",
   "   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    ",
   "                                                                                               !x    ",
   "                                                                                               !x    ",
   "                                         o                                                     !x    ",
   "                                                                                               !x    ",
   "                                         x                                                     !x    ",
   "                                         x                                                     !x    ",
   "                                        xxx                                                    !x    ",
   "                                        x x                                                    !x    ",
   "                                        x x                                                    !x    ",
   "                                      xxxxxxx              |||        |||         o            !x    ",
   "                                        ! !                |x|   o o  |x|        xxx           !x    ",
   "                                        ! !                 x    xxx   x        x!!!x          !x    ",
   "                                     o  ! !                 xxxxxxxxxxxx         xvx           !x    ",
   "                                     xxx! !  s s      xxxxxxxx              o                  !x    ",
   "          !!!!!!!                       ! !xxxxxxxx   x                    xxx                 !x    ",
   "          !vvv                          ! !           x     v             x!x!x                !x    ",
   "          !                          o  ! !           x                    xvx                 !x    ",
   "          !                          xxx! !           x             o                          !x    ",
   "          !                             ! != = = =    x            xxx                         !x    ",
   "          !                             ! !           x           xx!xx       o                !x    ",
   "          !                             ! !    = = = =x     o      xvx       xxx               !x    ",
   "          !                      xx     ! !           x                    ss!!!ss       o     !x    ",
   "          !                             ! !           x     x                vxv        xxx    !x    ",
   "          !                    o        ! !           x              x                 s!!!s   !x    ",
   "          ! k                           xxxx|||  o o  x!!!!!!!!!!!!!!x                  xvx    !x    ",
   "          !xxx               xxxxxxxxxxxxxxx         x!!!!!!!!!!!!!!x                          !x    ",
   "                             x           xx   xxxxxxxxxxxxxxxxxxxxxxx                o         !x    ",
   "                    o        x           xx              x                          xxx       xxx    ",
   "  x               xxxxx      x           xx              x                        xs!!!sx     !!x    ",
   "  x               x|||x      x           xx              x             o o          xxx       !!x    ",
   "  x                          x           xxxxxxx         x            xx xx                    !x    ",
   "  x                         xx           x               x            x ! x                    !x    ",
   "  x                          x           x          o    x    o       x x x                    !x    ",
   "  x                 o        x           x       |xxxx|  x  |xxxx|  xxx!!!xxx      h           !x    ",
   "  x                x!x       x           x                              !        sxxxs         !x    ",
   "  x               xxxxx      x           x                             !!!       x!!!x         !x    ",
   "  x               oxxxo      x           x                             !!!        xxx          !x    ",
   "  x                !x!       x           x  x oo x    x oo x    x oo  !! !!                    !x    ",
   "  x      @         !!!       x           x!!x    x!!!!x    x!!!!x    xx   xx!!!!!!!!!!!!!!!!!!!!x    ",
   "  xx xx xx xx xx xx!!!xxxxsssx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxx    ",
   "                                                                                                     ",
   "                                                                                                     "],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;

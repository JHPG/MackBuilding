function Mack1952(attr){    //nome do Prototype
    return "\n\
    \
        <!-- <ExternProtoDeclare name='WallWithWindowInt' url='wallWindowIntPrototype.x3d'>\n\
            <field name='wallWindowIntTextureUrl' type='MFString' accessType='inputOutput'/> \n\
            <field name='wallWindowIntColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
	    <field name='wallWindowTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
            <field name='wallWindowRotation' type='SFRotation' value='-1 -1 -1 0' accessType='inputOutput'/>\n\
        </ExternProtoDeclare>\n\
        <ExternProtoDeclare name='WallInt' url='wallIntPrototype.x3d'>\n\
            <field name='wallIntTextureUrl' type='MFString' accessType='inputOutput'/>\n\
            <field name='wallIntTextureTransformScale' type='SFVec2f' value='0.0' accessType='inputOutput' />\n\
            <field name='wallIntColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
            <field name='wallIntScale' type='SFVec3f' value='1 1 1' accessType='inputOutput'/>\n\
    	    <field name='wallIntTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
    	    <field name='wallIntRotation' type='SFRotation' value='-1 -1 -1 0' accessType='inputOutput'/>\n\
        </ExternProtoDeclare>\n\
        <ExternProtoDeclare name='WallIntHall' url=' 'wallIntHallPrototype.x3d' '>\n\
            <field name='wallIntHallTextureUrl' type='MFString' accessType='inputOutput'/>\n\
            <field name='wallIntHallColor' type='SFColor' accessType='inputOutput'/>\n\
            <field name='wallIntRoomTextureUrl' type='MFString' accessType='inputOutput'/>\n\
            <field name='wallIntRoomColor' type='SFColor' accessType='inputOutput'/>\n\
            <field name='wallIntHallScale' type='SFVec3f' accessType='inputOutput'/> \n\
            <field name='wallIntHallTranslation' type='SFVec3f' accessType='inputOutput'/>\n\
            <field name='wallIntHallRotation' type='SFRotation' accessType='inputOutput'/>\n\
        </ExternProtoDeclare>\n\
            <WorldInfo info='Rectors Office' title='Mackenzie Building 1952 - Rectors Office'/> \n\
                <MetadataSet name='Activity' reference='RectorsOffice'>\n\
                    <MetadataString name='existSince' value='1952'/>\n\
                    <MetadataString name='modified'value='MackenzieBuilding'/>\n\
                </MetadataSet> -->\n\
                    \n\
            <Group DEF='WallIntRoom1aa_1952' onmouseover=\"showText('A sala 1, que já havia sido dividida, passa por uma nova divisão em 1952.') \">\n\
                <!-- <MetadataSet name='Room1aa' reference='Room1aa in Rector's Office due the division of Room1a'>\n\
                        <MetadataString name='isIncorporatedIn' value='MackenzieBuilding'/>\n\
                        <MetadataString name='isComposedOf' value='ExternalWall'/>\n\
                        <MetadataString name='isComposedOf' value='InternalWall'/>\n\
                        <MetadataString name='occursDuring' value='Rector'sOffice'/>\n\
                        <MetadataString name='wasModifiedBy' value='Restoration'/>\n\
                        <MetadataInteger name='existSince' value='1952'/>\n\
                        <MetadataInteger name='wasChangedIn' value='2004'/>\n\
                   </MetadataSet> -->\n\
                <Transform DEF='SideWall49' translation='1.6 1.4 -6.1'>\n\
                    <!-- <MetadataSet name='PartitionWall' reference='partition wall made wood leaked internally, covered with jute and wire mesh to hold the mortar'>\n\
                        <MetadataString name='consistsOf' value='Wood'/>\n\
                        <MetadataString name='consistsOf' value='Mortar'/>\n\
                        <MetadataString name='consistsOf' value='Jute'/>\n\
                        <MetadataString name='wasModifiedBy' value='Restoration'/>\n\
                        <MetadataInteger name='startTime' value='1920'/>\n\
                        <MetadataInteger name='wasChangedIn' value='1998'/>\n\
                    </MetadataSet> -->\n\
                    <!-- <ProtoInstance name='WallInt'>\n\
                        <fieldValue name='wallIntColor' value='1.0 1.0 0.0' />\n\
                        <fieldValue name='wallIntScale' value='4.9 1.0 0.5' />\n\
                    </ProtoInstance> -->\n\
                    <prototype use='WallInt' \n\
                        wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                        wallIntScale ='4.9 1.0 0.5' \n\
                        wallinttextureurl =''\n\
                        wallinttexturetransformscale ='0.0'\n\
                        wallinttranslation ='0 0 0'\n\
                        wallintrotation ='-1 -1 -1 0' >\n\
                    </prototype>\n\
                </Transform>\n\
               <Group DEF='FrontWallInt'>\n\
                  <Transform DEF='FrontWall' translation='0.75 0 0'>\n\
                    <Transform translation='-1.225 1.4 -0.25'>\n\
                         <Group DEF='Wall75'>\n\
                             <!-- <ProtoInstance name='WallInt'>\n\
                                <fieldValue name='wallIntColor' value='1.0 1.0 0.0'/>\n\
                                <fieldValue name='wallIntScale' value='0.75 1 1'/>\n\
                            </ProtoInstance> -->\n\
                            <prototype use='WallInt' \n\
                                wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                                wallIntScale ='0.75 1 1' \n\
                                wallinttextureurl =''\n\
                                wallinttexturetransformscale ='0.0'\n\
                                wallinttranslation ='0 0 0'\n\
                                wallintrotation ='-1 -1 -1 0' >\n\
                            </prototype>\n\
                         </Group>\n\
                    </Transform>\n\
                    <!-- <ProtoInstance name='WallWithWindowInt'>\n\
                        <fieldValue name='wallWindowIntColor' value='1.0 1.0 0.0'/>\n\
                    </ProtoInstance> -->\n\
                    <prototype use='WallWithWindowInt' \n\
                        wallwindowintcolor ='0.541176471 0.658823529 0.870588235' \n\
                        wallwindowtranslation ='0 0 0' \n\
                        wallwindowrotation ='-1 -1 -1 0' \n\
                        wallwindowinttextureurl ='' > \n\
                    </prototype>\n\
\n\
                    <Transform translation='1.1 1.40 -0.25'> \n\
                        <Group DEF='wall50'>\n\
                            <!-- <ProtoInstance name='WallInt'>\n\
                                <fieldValue name='wallIntColor' value='1.0 1.0 0.0'/>\n\
                                <fieldValue name='wallIntScale' value='0.5 1 1'/>\n\
                            </ProtoInstance> -->\n\
                            <prototype use='WallInt' \n\
                                wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                                wallIntScale ='0.5 1 1' \n\
                                wallinttextureurl =''\n\
                                wallinttexturetransformscale ='0.0'\n\
                                wallinttranslation ='0 0 0'\n\
                                wallintrotation ='-1 -1 -1 0' >\n\
                            </prototype>\n\
                        </Group>\n\
                    </Transform>\n\
                    <!-- <ProtoInstance name='WallWithWindowInt'>\n\
                        <fieldValue name='wallWindowTranslation' value='2.2 0 0'/>\n\
                        <fieldValue name='wallWindowIntColor' value='1.0 1.0 0.0'/>\n\
                    </ProtoInstance> -->\n\
                    <prototype use='WallWithWindowInt' \n\
                        wallwindowintcolor = '0.541176471 0.658823529 0.870588235'\n\
                        wallwindowtranslation ='2.2 0 0' \n\
                        wallwindowrotation ='-1 -1 -1 0' \n\
                        wallwindowinttextureurl ='' > \n\
                    </prototype>\n\
                  </Transform>\n\
                  <Transform translation='3.925 1.40 -0.25'>\n\
                    <Group DEF='wall25Room1aa'>\n\
                         <!-- <ProtoInstance name='WallInt'>\n\
                                <fieldValue name='wallIntColor' value='1.0 1.0 0.0'/>\n\
                                <fieldValue name='wallIntScale' value='0.25 1 1'/>\n\
                         </ProtoInstance> -->\n\
                        <prototype use='WallInt' \n\
                            wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                            wallIntScale ='0.25 1 1' \n\
                            wallinttextureurl =''\n\
                            wallinttexturetransformscale ='0.0'\n\
                            wallinttranslation ='0 0 0'\n\
                            wallintrotation ='-1 -1 -1 0' >\n\
                        </prototype>\n\
                    </Group>\n\
                  </Transform>\n\
               </Group>\n\
                <Group DEF='SideWallWindowRoom1aa'>\n\
                    <Transform rotation='0 1 0 -1.57' translation='-1.2 0 -2.75'>\n\
                        <Transform translation='1.725 1.4 -0.25'>\n\
                            <Group DEF='Wall175'>\n\
                                <!-- <ProtoInstance name='WallInt'>\n\
                                    <fieldValue name='wallIntColor' value='1.0 1.0 0.0'/>\n\
                                    <fieldValue name='wallIntScale' value='1.75 1 1'/>\n\
                                </ProtoInstance> -->\n\
                                <prototype use='WallInt' \n\
                                    wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                                    wallIntScale ='1.75 1 1' \n\
                                    wallinttextureurl =''\n\
                                    wallinttexturetransformscale ='0.0'\n\
                                    wallinttranslation ='0 0 0'\n\
                                    wallintrotation ='-1 -1 -1 0' >\n\
                                </prototype>\n\
                            </Group>    \n\
                        </Transform>\n\
                       <Group DEF='WallWindowSideRoom1a'>\n\
                            <Group DEF='WallWindowSideRoom1'>\n\
                                <!-- <ProtoInstance name='WallWithWindowInt'>\n\
                                    <fieldValue name='wallWindowIntColor' value='1.0 1.0 0.0'/> \n\
                                </ProtoInstance> -->\n\
                                <prototype use='WallWithWindowInt' \n\
                                    wallwindowintcolor = '0.541176471 0.658823529 0.870588235' \n\
                                    wallwindowtranslation ='0 0 0' \n\
                                    wallwindowrotation ='-1 -1 -1 0' \n\
                                    wallwindowinttextureurl ='' >\n\
                                </prototype>                               \n\
                            </Group>\n\
                            <Transform translation='-1.70 0 0'>\n\
                                <Group USE='WallWindowSideRoom1'/>\n\
                            </Transform>\n\
                        </Group>\n\
                        <Group DEF='Wall85Room1aa'>\n\
                            <Transform translation='-2.975 1.40 -0.25'>\n\
                                 <!-- <ProtoInstance name='WallInt'>\n\
                                    <fieldValue name='wallIntColor' value='1.0 1.0 0.0'/>\n\
                                    <fieldValue name='wallIntScale' value='0.85 1 1'/>\n\
                                </ProtoInstance> -->\n\
                                <prototype use='WallInt' \n\
                                    wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                                    wallIntScale ='0.85 1 1' \n\
                                    wallinttextureurl =''\n\
                                    wallinttexturetransformscale ='0.0'\n\
                                    wallinttranslation ='0 0 0'\n\
                                    wallintrotation ='-1 -1 -1 0' >\n\
                                </prototype>\n\
                            </Transform>\n\
                        </Group>\n\
                    </Transform> \n\
                </Group>\n\
                <Transform DEF='WallIntRoom1aa'  translation='4.00 -0.9 -3.20'>\n\
                     <Shape>\n\
                        <Appearance >\n\
                             <Material  diffuseColor= '0.541176471 0.658823529 0.870588235'/>\n\
                        </Appearance>\n\
                        <IndexedFaceSet  DEF='WallIntRoom1aa_1952-FACES'  coordIndex=' 12 13 1 -1 1 0 12 -1 4 5 7 -1 7 6 4 -1 0 1 5 -1 5 4 0 -1 3 2 6 -1 6 7 3 -1 9 15 3 -1 9 3 7 -1 8 9 7 -1 8 7 5 -1 8 5 1 -1 8 1 13 -1 11 12 0 -1 11 0 4 -1 10 11 4 -1 10 4 6 -1 10 6 2 -1 10 2 14 -1 2 3 15 -1 15 14 2 -1 9 10 14 -1 14 15 9 -1 10 9 8 -1 8 11 10 -1 13 12 11 -1 11 8 13 -1' solid='true' ccw='true'>\n\
                            <Coordinate  DEF='WallIntRoom1aa_1952-COORD'  point='-0.05 0.0 2.85, 0.05 0.0 2.85, -0.05 0.0 -2.85, 0.05 0.0 -2.85, -0.05 4.6 2.85, 0.05 4.6 2.85, -0.05 4.6 -2.85, 0.05 4.6 -2.85, 0.05 2.1 0.35, 0.05 2.1 -0.35, -0.05 2.1 -0.35, -0.05 2.1 0.35, -0.05 0.0 0.35, 0.05 0.0 0.35, -0.05 0.0 -0.35, 0.05 0.0 -0.35, '/>\n\
                        </IndexedFaceSet>\n\
                     </Shape>\n\
                </Transform>\n\
            </Group>\n\
                   \n\
           <Group DEF='WallIntRoom1ab_1952'>\n\
                    <Transform translation='4.175 1.40 -0.25'>\n\
                        <Group DEF='wall25Room1ab'>\n\
                            <!-- <ProtoInstance name='WallInt'>\n\
                                <fieldValue name='wallIntColor' value='1.0 1.0 0.0'/>\n\
                                <fieldValue name='wallIntScale' value='0.25 1 1'/>\n\
                            </ProtoInstance> -->\n\
                            <prototype use='WallInt' \n\
                                wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                                wallIntScale ='0.25 1 1' \n\
                                wallinttextureurl =''\n\
                                wallinttexturetransformscale ='0.0'\n\
                                wallinttranslation ='0 0 0'\n\
                                wallintrotation ='-1 -1 -1 0' >\n\
                            </prototype>\n\
                        </Group>\n\
                    </Transform>\n\
                    <!-- <ProtoInstance name='WallWithWindowInt'>\n\
                        <fieldValue name='wallWindowTranslation' value='5.15 0 0'/>\n\
                        <fieldValue name='wallWindowIntColor' value='0.0 1.0 0.0'/>\n\
                    </ProtoInstance> -->\n\
                    <prototype use='WallWithWindowInt' \n\
                        wallwindowintcolor = '0.541176471 0.658823529 0.870588235' \n\
                        wallwindowtranslation ='5.15 0 0' \n\
                        wallwindowrotation ='-1 -1 -1 0' \n\
                        wallwindowinttextureurl ='' > \n\
                    </prototype>\n\
                    <Transform translation='6.375 1.4 -0.25'>\n\
                        <!-- <ProtoInstance name='WallInt'>\n\
                             <fieldValue name='wallIntColor' value='0.0 1.0 0.0'/>\n\
                             <fieldValue name='wallIntScale' value='0.75 1 1'/>\n\
                        </ProtoInstance> -->\n\
                        <prototype use='WallInt' \n\
                            wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                            wallIntScale ='0.75 1 1' \n\
                            wallinttextureurl =''\n\
                            wallinttexturetransformscale ='0.0'\n\
                            wallinttranslation ='0 0 0'\n\
                            wallintrotation ='-1 -1 -1 0' >\n\
                        </prototype>\n\
                    </Transform>\n\
                    <Transform DEF='WallDoorRoom1ab' rotation='0 1 0 3.14' translation='6.65 -0.90 -5.775'>\n\
                        <Shape >\n\
                            <Appearance >\n\
                                <Material  diffuseColor= '0.541176471 0.658823529 0.870588235'/>\n\
                            </Appearance>\n\
                            <IndexedFaceSet  DEF='DoorWallIntRoom1ab-FACES'  coordIndex=' 8 9 12 -1 12 13 8 -1 3 2 14 -1 14 15 3 -1 1 0 2 -1 2 3 1 -1 12 9 4 -1 4 16 12 -1 6 2 0 -1 0 10 6 -1 0 1 11 -1 11 10 0 -1 4 7 6 -1 6 5 4 -1 5 6 10 -1 10 11 5 -1 9 8 7 -1 7 4 9 -1 4 5 3 -1 4 3 15 -1 4 15 16 -1 5 11 1 -1 1 3 5 -1 7 17 14 -1 7 14 2 -1 7 2 6 -1 13 17 7 -1 7 8 13 -1 16 15 14 -1 12 16 14 -1 12 14 17 -1 13 12 17 -1' solid='true' ccw='true'>\n\
                                <Coordinate  DEF='DoorWallIntRoom1ab-COORD'  point='-0.1 0.0 -5.425, 0.1 0.0 -5.425, -0.1 4.6 -5.425, 0.1 4.6 -5.425, 0.1 2.9 -2.525, 0.1 2.9 -3.725, -0.1 2.9 -3.725, -0.1 2.9 -2.525, -0.1 0.0 -2.525, 0.1 0.0 -2.525, -0.1 0.0 -3.725, 0.1 0.0 -3.725, 0.1 0.0 0.375, -0.1 0.0 0.375, -0.1 4.6 0.375, 0.1 4.6 0.375, 0.1 3.52 0.375, -0.1 3.52 0.375, '/>\n\
                            </IndexedFaceSet>\n\
                        </Shape>\n\
                    </Transform>\n\
                    <Transform DEF='SideWall25' translation='5.3 1.4 -6.1'>\n\
                        <!-- <ProtoInstance name='WallInt'>\n\
                            <fieldValue name='wallIntColor' value='0.0 1.0 0.0' />\n\
                            <fieldValue name='wallIntScale' value='2.5 1.0 0.5' />\n\
                        </ProtoInstance> -->\n\
                        <prototype use='WallInt' \n\
                            wallIntColor ='0.541176471 0.658823529 0.870588235' \n\
                            wallIntScale ='2.5 1.0 0.5' \n\
                            wallinttextureurl =''\n\
                            wallinttexturetransformscale ='0.0'\n\
                            wallinttranslation ='0 0 0'\n\
                            wallintrotation ='-1 -1 -1 0' >\n\
                        </prototype>\n\
                    </Transform>\n\
                    <Transform DEF='WallIntRoom1ab' translation='4.10 -0.9 -3.20'>\n\
                        <Shape>\n\
                            <Appearance >\n\
                                <Material  diffuseColor= '0.541176471 0.658823529 0.870588235'/>\n\
                            </Appearance>\n\
                            <IndexedFaceSet  DEF='WallIntRoom1ab_1952-FACES'  coordIndex=' 12 13 1 -1 1 0 12 -1 4 5 7 -1 7 6 4 -1 0 1 5 -1 5 4 0 -1 3 2 6 -1 6 7 3 -1 9 15 3 -1 9 3 7 -1 8 9 7 -1 8 7 5 -1 8 5 1 -1 8 1 13 -1 11 12 0 -1 11 0 4 -1 10 11 4 -1 10 4 6 -1 10 6 2 -1 10 2 14 -1 2 3 15 -1 15 14 2 -1 9 10 14 -1 14 15 9 -1 10 9 8 -1 8 11 10 -1 13 12 11 -1 11 8 13 -1' solid='true' ccw='true'>\n\
                                <Coordinate  DEF='WallIntRoom1ab_1952-COORD'  point='-0.05 0.0 2.85, 0.05 0.0 2.85, -0.05 0.0 -2.85, 0.05 0.0 -2.85, -0.05 4.6 2.85, 0.05 4.6 2.85, -0.05 4.6 -2.85, 0.05 4.6 -2.85, 0.05 2.1 0.35, 0.05 2.1 -0.35, -0.05 2.1 -0.35, -0.05 2.1 0.35, -0.05 0.0 0.35, 0.05 0.0 0.35, -0.05 0.0 -0.35, 0.05 0.0 -0.35, '/>\n\
                            </IndexedFaceSet>\n\
                        </Shape>\n\
                    </Transform>\n\
            </Group>\n\
\n\
            <Group DEF='WallIntRoom1b_1952'>\n\
                   <Transform rotation='0 1 0 -1.57' translation='-1.205 0 -7.85'>\n\
                        <Group DEF='WallWindowSideRoom1b'>\n\
                            <Group DEF='WallWindowSideRoom_1b'>\n\
                                <!-- <ProtoInstance name='WallWithWindowInt'>\n\
                                    <fieldValue name='wallWindowIntColor' value='1.0 0.0 1.0'/> \n\
                                </ProtoInstance> -->\n\
                                <prototype use='WallWithWindowInt' \n\
                                    wallwindowintcolor = '0.541176471 0.658823529 0.870588235' \n\
                                    wallwindowtranslation ='0 0 0' \n\
                                    wallwindowrotation ='-1 -1 -1 0' \n\
                                    wallwindowinttextureurl ='' > \n\
                                </prototype>\n\
                            </Group>\n\
                            <Transform translation='-1.70 0 0'>\n\
                                <Group USE='WallWindowSideRoom_1b'/>\n\
                            </Transform>\n\
                        </Group>\n\
                   </Transform>\n\
                   <Group DEF='Wall85-Room1b'>\n\
                        <Transform rotation='0 1 0 -1.57' translation='-0.95 1.40 -6.575'>\n\
                               <!-- <ProtoInstance name='WallInt'>\n\
                                    <fieldValue name='wallIntColor' value='1.0 0.0 1.0'/>\n\
                                    <fieldValue name='wallIntScale' value='0.85 1 1'/>\n\
                                </ProtoInstance> -->\n\
                                <prototype use='WallInt' \n\
                                    wallIntColor ='0.541176471 0.658823529 0.870588235' \n\
                                    wallIntScale ='0.85 1 1' \n\
                                    wallinttextureurl =''\n\
                                    wallinttexturetransformscale ='0.0'\n\
                                    wallinttranslation ='0 0 0'\n\
                                    wallintrotation ='-1 -1 -1 0' >\n\
                                </prototype>\n\
                        </Transform>\n\
                   </Group>\n\
                   <Transform translation='0 0 -4.25'>\n\
                        <Group USE='Wall85-Room1b' />\n\
                   </Transform> \n\
\n\
                   <Group DEF='WallInt74x20'>\n\
                       <Transform translation='2.85 1.4 -11.1'>\n\
                            <!-- <ProtoInstance name='WallInt'>\n\
                                <fieldValue name='wallIntColor' value='1.0 0.0 1.0' />\n\
                                <fieldValue name='wallIntScale' value='7.4 1.0 1.0' />\n\
                            </ProtoInstance> -->\n\
                            <prototype use='WallInt' \n\
                                wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                                wallIntScale ='7.4 1.0 1.0' \n\
                                wallinttextureurl =''\n\
                                wallinttexturetransformscale ='0.0'\n\
                                wallinttranslation ='0 0 0'\n\
                                wallintrotation ='-1 -1 -1 0' >\n\
                            </prototype>\n\
                       </Transform>\n\
                    </Group>\n\
                    <Group DEF='WallInt74x10'>\n\
                       <Transform translation='2.85 1.4 -6.2'>\n\
                            <!-- <ProtoInstance name='WallInt'>\n\
                                <fieldValue name='wallIntColor' value='1.0 0.0 1.0' />\n\
                                <fieldValue name='wallIntScale' value='7.4 1.0 0.5' />\n\
                            </ProtoInstance> -->\n\
                            <prototype use='WallInt' \n\
                                wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                                wallIntScale ='7.4 1.0 0.5' \n\
                                wallinttextureurl =''\n\
                                wallinttexturetransformscale ='0.0'\n\
                                wallinttranslation ='0 0 0'\n\
                                wallintrotation ='-1 -1 -1 0' >\n\
                            </prototype>\n\
                       </Transform>\n\
                    </Group>\n\
                    <Transform DEF='WallDoorRoom1b' translation='6.65 -0.90 -5.775'>\n\
                        <Shape >\n\
                            <Appearance >\n\
                                <Material  diffuseColor= '0.541176471 0.658823529 0.870588235'/>\n\
                            </Appearance>\n\
                            <IndexedFaceSet  DEF='DoorWallIntRoom1b-FACES'  coordIndex=' 8 9 16 -1 16 17 8 -1 3 2 18 -1 18 19 3 -1 1 0 2 -1 2 3 1 -1 13 6 2 -1 13 2 0 -1 13 0 10 -1 0 1 11 -1 11 10 0 -1 10 11 14 -1 14 13 10 -1 15 12 9 -1 9 8 15 -1 5 3 19 -1 5 19 20 -1 4 5 20 -1 14 11 1 -1 14 1 3 -1 5 14 3 -1 15 8 17 -1 15 17 21 -1 7 15 21 -1 14 12 15 -1 15 13 14 -1 13 15 7 -1 7 6 13 -1 12 14 5 -1 5 4 12 -1 16 9 12 -1 16 12 4 -1 16 4 20 -1 2 6 7 -1 2 7 21 -1 18 2 21 -1 20 19 18 -1 20 18 21 -1 16 20 21 -1 17 16 21 -1' solid='true' ccw='true'>\n\
                                  <Coordinate  DEF='DoorWallIntRoom1b-COORD'  point='-0.1 0.0 -5.425, 0.1 0.0 -5.425, -0.1 4.6 -5.425, 0.1 4.6 -5.425, 0.1 2.9 -2.525, 0.1 2.9 -3.725, -0.1 2.9 -3.725, -0.1 2.9 -2.525, -0.1 0.0 -2.525, 0.1 0.0 -2.525, -0.1 0.0 -3.725, 0.1 0.0 -3.725, 0.1 2.1 -2.525, -0.1 2.1 -3.725, 0.1 2.1 -3.725, -0.1 2.1 -2.525, 0.1 0.0 -0.325, -0.1 0.0 -0.325, -0.1 4.6 -0.325, 0.1 4.6 -0.325, 0.1 3.37 -0.325, -0.1 3.37 -0.325, '/>\n\
                            </IndexedFaceSet>\n\
                        </Shape>\n\
                    </Transform>\n\
            </Group>\n\
            \n\
            <Group DEF='WallIntRoom2a_1952'>\n\
                <Transform DEF='SideWall49Room2' translation='1.6 1.4 -11.3'>\n\
                    <!-- <ProtoInstance name='WallInt'>\n\
                        <fieldValue name='wallIntColor' value='0.0 0.0 1.0' />\n\
                        <fieldValue name='wallIntScale' value='4.9 1.0 1.0' />\n\
                    </ProtoInstance> -->\n\
                    <prototype use='WallInt' \n\
                        wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                        wallIntScale ='4.9 1.0 1.0' \n\
                        wallinttextureurl =''\n\
                        wallinttexturetransformscale ='0.0'\n\
                        wallinttranslation ='0 0 0'\n\
                        wallintrotation ='-1 -1 -1 0' >\n\
                    </prototype>\n\
\n\
                </Transform>\n\
\n\
                <Transform rotation='0 1 0 -1.57' translation='-1.2 0 -12.95'>\n\
                    <Group DEF='WallWindowSideRoom2a'>\n\
                        <Group DEF='WallWindowSideRoom2'>\n\
                            <!-- <ProtoInstance name='WallWithWindowInt'>\n\
                                <fieldValue name='wallWindowIntColor' value='0.0 0.0 1.0'/> \n\
                            </ProtoInstance> -->\n\
                            <prototype use='WallWithWindowInt' \n\
                                wallwindowintcolor = '0.541176471 0.658823529 0.870588235' \n\
                                wallwindowtranslation ='0 0 0' \n\
                                wallwindowrotation ='-1 -1 -1 0' \n\
                                wallwindowinttextureurl ='' > \n\
                            </prototype>\n\
                        </Group>\n\
                        <Transform translation='-1.70 0 0'>\n\
                            <Group USE='WallWindowSideRoom2'/>\n\
                        </Transform>\n\
                    </Group>\n\
                </Transform>\n\
                 <Group DEF='Wall85Room2a'>\n\
                     <Transform rotation='0 1 0 -1.57' translation='-0.95 1.4 -11.675'>\n\
                          <!-- <ProtoInstance name='WallInt'>\n\
                                <fieldValue name='wallIntColor' value='0.0 0.0 1.0'/>\n\
                                <fieldValue name='wallIntScale' value='0.85 1 1'/>\n\
                          </ProtoInstance> -->\n\
                          <prototype use='WallInt' \n\
                            wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                            wallIntScale ='0.85 1 1' \n\
                            wallinttextureurl =''\n\
                            wallinttexturetransformscale ='0.0'\n\
                            wallinttranslation ='0 0 0'\n\
                            wallintrotation ='-1 -1 -1 0' >\n\
                        </prototype>\n\
                     </Transform>\n\
                </Group>\n\
                \n\
                <Transform rotation='0 1 0 -1.57' translation='-0.95 1.4 -16.365'>\n\
                    <Group DEF='Wall175Room2'>\n\
                         <!-- <ProtoInstance name='WallInt'>\n\
                               <fieldValue name='wallIntColor' value='0.0 0.0 1.0'/>\n\
                               <fieldValue name='wallIntScale' value='1.75 1 1'/>\n\
                         </ProtoInstance> -->\n\
                         <prototype use='WallInt' \n\
                            wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                            wallIntScale ='1.75 1 1' \n\
                            wallinttextureurl =''\n\
                            wallinttexturetransformscale ='0.0'\n\
                            wallinttranslation ='0 0 0'\n\
                            wallintrotation ='-1 -1 -1 0' >\n\
                        </prototype>\n\
                    </Group>\n\
                </Transform>\n\
                \n\
                <Transform translation='4.00 -0.9 -14.25'>\n\
                    <Shape >\n\
                        <Appearance >\n\
                            <Material  diffuseColor= '0.541176471 0.658823529 0.870588235'/>\n\
                        </Appearance>\n\
                        <IndexedFaceSet  DEF='WallIntRoom2a_1952-FACES'  coordIndex=' 12 13 1 -1 1 0 12 -1 4 5 7 -1 7 6 4 -1 0 1 5 -1 5 4 0 -1 3 2 6 -1 6 7 3 -1 9 15 3 -1 9 3 7 -1 8 9 7 -1 8 7 5 -1 8 5 1 -1 8 1 13 -1 11 12 0 -1 11 0 4 -1 10 11 4 -1 10 4 6 -1 10 6 2 -1 10 2 14 -1 2 3 15 -1 15 14 2 -1 9 10 14 -1 14 15 9 -1 10 9 8 -1 8 11 10 -1 13 12 11 -1 11 8 13 -1' solid='true' ccw='true'>\n\
                            <Coordinate  DEF='WallIntRoom2a_1952-COORD'  point='-0.05 0.0 2.85, 0.05 0.0 2.85, -0.05 0.0 -2.85, 0.05 0.0 -2.85, -0.05 4.6 2.85, 0.05 4.6 2.85, -0.05 4.6 -2.85, 0.05 4.6 -2.85, 0.05 2.1 0.35, 0.05 2.1 -0.35, -0.05 2.1 -0.35, -0.05 2.1 0.35, -0.05 0.0 0.35, 0.05 0.0 0.35, -0.05 0.0 -0.35, 0.05 0.0 -0.35, '/>\n\
                        </IndexedFaceSet>\n\
                    </Shape>\n\
                </Transform>\n\
                \n\
                <Transform translation='0 0 -16.90'>\n\
                    <Group DEF='FrontWallIntRoom3a'>\n\
                        <Transform DEF='FrontWallRoom2a' translation='0.75 0 0'>\n\
                            <Transform translation='-1.225 1.4 -0.25'>\n\
                                <Group DEF='Wall75Room2a'>\n\
                                    <!-- <ProtoInstance name='WallInt'>\n\
                                        <fieldValue name='wallIntColor' value='0.0 0.0 1.0'/>\n\
                                        <fieldValue name='wallIntScale' value='0.75 1 1'/>\n\
                                    </ProtoInstance> -->\n\
                                    <prototype use='WallInt' \n\
                                        wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                                        wallIntScale ='0.75 1 1' \n\
                                        wallinttextureurl =''\n\
                                        wallinttexturetransformscale ='0.0'\n\
                                        wallinttranslation ='0 0 0'\n\
                                        wallintrotation ='-1 -1 -1 0' >\n\
                                    </prototype>\n\
                                </Group>\n\
                            </Transform>\n\
                            <!-- <ProtoInstance name='WallWithWindowInt'>\n\
                                <fieldValue name='wallWindowIntColor' value='0.0 0.0 1.0'/>\n\
                            </ProtoInstance> -->\n\
                            <prototype use='WallWithWindowInt' \n\
                                wallwindowintcolor = '0.541176471 0.658823529 0.870588235' \n\
                                wallwindowtranslation ='0 0 0' \n\
                                wallwindowrotation ='-1 -1 -1 0' \n\
                                wallwindowinttextureurl ='' > \n\
                            </prototype>\n\
                            <Transform translation='1.1 1.40 -0.25'> \n\
                                <Group DEF='wall50Room2a'>\n\
                                    <!-- <ProtoInstance name='WallInt'>\n\
                                        <fieldValue name='wallIntColor' value='0.0 0.0 1.0'/>\n\
                                        <fieldValue name='wallIntScale' value='0.5 1 1'/>\n\
                                    </ProtoInstance> -->\n\
                                    <prototype use='WallInt'  \n\
                                        wallIntColor = '0.541176471 0.658823529 0.870588235'  \n\
                                        wallIntScale ='0.5 1 1'  \n\
                                        wallinttextureurl ='' \n\
                                        wallinttexturetransformscale ='0.0' \n\
                                        wallinttranslation ='0 0 0' \n\
                                        wallintrotation ='-1 -1 -1 0' > \n\
                                    </prototype> \n\
                                </Group>\n\
                            </Transform>\n\
                            <!-- <ProtoInstance name='WallWithWindowInt'>\n\
                                <fieldValue name='wallWindowTranslation' value='2.2 0 0'/>\n\
                                <fieldValue name='wallWindowIntColor' value='0.0 0.0 1.0'/>\n\
                            </ProtoInstance> -->\n\
                            <prototype use='WallWithWindowInt' \n\
                                wallwindowintcolor = '0.541176471 0.658823529 0.870588235' \n\
                                wallwindowtranslation ='2.2 0 0' \n\
                                wallwindowrotation ='-1 -1 -1 0' \n\
                                wallwindowinttextureurl ='' > \n\
                            </prototype>\n\
                        </Transform>\n\
                        <Transform translation='3.925 1.40 -0.25'>\n\
                            <Group DEF='wall25Room2a'>\n\
                                <!-- <ProtoInstance name='WallInt'>\n\
                                        <fieldValue name='wallIntColor' value='0.0 0.0 1.0'/>\n\
                                        <fieldValue name='wallIntScale' value='0.25 1 1'/>\n\
                                </ProtoInstance> -->\n\
                                <prototype use='WallInt' \n\
                                    wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                                    wallIntScale ='0.25 1 1' \n\
                                    wallinttextureurl =''\n\
                                    wallinttexturetransformscale ='0.0'\n\
                                    wallinttranslation ='0 0 0'\n\
                                    wallintrotation ='-1 -1 -1 0' >\n\
                                </prototype>\n\
                            </Group>\n\
                        </Transform>\n\
                    </Group>\n\
                 </Transform>\n\
            </Group>\n\
            \n\
            <Group DEF='WallIntRoom2b_1952'>\n\
                <Transform  DEF='WallDoorRoom2b' rotation='0 1 0 3.14' translation='6.65 -0.90 -14.325'>\n\
                    <Shape >\n\
                        <Appearance >\n\
                            <Material  diffuseColor= '0.541176471 0.658823529 0.870588235'/>\n\
                        </Appearance>\n\
                        <IndexedFaceSet  DEF='DoorWallIntRoom2b-FACES'  coordIndex=' 12 13 1 -1 1 0 12 -1 4 5 7 -1 7 6 4 -1 0 1 5 -1 5 4 0 -1 3 2 6 -1 6 7 3 -1 9 15 3 -1 9 3 7 -1 9 7 5 -1 8 9 5 -1 8 5 1 -1 8 1 13 -1 11 12 0 -1 11 0 4 -1 10 11 4 -1 10 4 6 -1 10 6 2 -1 10 2 14 -1 2 3 15 -1 15 14 2 -1 8 11 10 -1 10 9 8 -1 9 10 14 -1 14 15 9 -1 13 12 11 -1 11 8 13 -1' solid='true' ccw='true'>\n\
                            <Coordinate  DEF='DoorWallIntRoom2b-COORD'  point='-0.1 0.0 3.125, 0.1 0.0 3.125, -0.1 0.0 -3.125, 0.1 0.0 -3.125, -0.1 4.6 3.125, 0.1 4.6 3.125, -0.1 4.6 -3.125, 0.1 4.6 -3.125, 0.1 2.9 1.425, 0.1 2.9 0.225, -0.1 2.9 0.225, -0.1 2.9 1.425, -0.1 0.0 1.425, 0.1 0.0 1.425, -0.1 0.0 0.225, 0.1 0.0 0.225, '/>\n\
                        </IndexedFaceSet>\n\
                    </Shape>\n\
                </Transform>\n\
                <Transform translation='4.10 -0.9 -14.25'>\n\
                    <Shape >\n\
                        <Appearance >\n\
                            <Material  diffuseColor= '0.541176471 0.658823529 0.870588235'/>\n\
                        </Appearance>\n\
                        <IndexedFaceSet  DEF='WallIntRoom2b_1952-FACES'  coordIndex=' 12 13 1 -1 1 0 12 -1 4 5 7 -1 7 6 4 -1 0 1 5 -1 5 4 0 -1 3 2 6 -1 6 7 3 -1 9 15 3 -1 9 3 7 -1 8 9 7 -1 8 7 5 -1 8 5 1 -1 8 1 13 -1 11 12 0 -1 11 0 4 -1 10 11 4 -1 10 4 6 -1 10 6 2 -1 10 2 14 -1 2 3 15 -1 15 14 2 -1 9 10 14 -1 14 15 9 -1 10 9 8 -1 8 11 10 -1 13 12 11 -1 11 8 13 -1' solid='true' ccw='true'>\n\
                            <Coordinate  DEF='WallIntRoom2b_1952-COORD'  point='-0.05 0.0 2.85, 0.05 0.0 2.85, -0.05 0.0 -2.85, 0.05 0.0 -2.85, -0.05 4.6 2.85, 0.05 4.6 2.85, -0.05 4.6 -2.85, 0.05 4.6 -2.85, 0.05 2.1 0.35, 0.05 2.1 -0.35, -0.05 2.1 -0.35, -0.05 2.1 0.35, -0.05 0.0 0.35, 0.05 0.0 0.35, -0.05 0.0 -0.35, 0.05 0.0 -0.35, '/>\n\
                        </IndexedFaceSet>\n\
                    </Shape>\n\
                </Transform>\n\
                <Transform translation='4.175 1.40 -17.15'>\n\
                        <Group DEF='wall25Room2b'>\n\
                            <!-- <ProtoInstance name='WallInt'>\n\
                                <fieldValue name='wallIntColor' value='1.0 0.0 0.0'/>\n\
                                <fieldValue name='wallIntScale' value='0.25 1 1'/>\n\
                            </ProtoInstance> -->\n\
                            <prototype use='WallInt' \n\
                                wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                                wallIntScale ='0.25 1 1' \n\
                                wallinttextureurl =''\n\
                                wallinttexturetransformscale ='0.0'\n\
                                wallinttranslation ='0 0 0'\n\
                                wallintrotation ='-1 -1 -1 0' >\n\
                            </prototype>\n\
                        </Group>\n\
                 </Transform>\n\
                 <Transform translation='6.375 1.40 -17.15'>\n\
                        <!-- <ProtoInstance name='WallInt'>\n\
                             <fieldValue name='wallIntColor' value='1.0 0.0 0.0'/>\n\
                             <fieldValue name='wallIntScale' value='0.75 1 1'/>\n\
                        </ProtoInstance> -->\n\
                        <prototype use='WallInt' \n\
                            wallIntColor = '0.541176471 0.658823529 0.870588235' \n\
                            wallIntScale ='0.75 1 1' \n\
                            wallinttextureurl =''\n\
                            wallinttexturetransformscale ='0.0'\n\
                            wallinttranslation ='0 0 0'\n\
                            wallintrotation ='-1 -1 -1 0' >\n\
                        </prototype>\n\
                 </Transform>\n\
                    <!-- <ProtoInstance name='WallWithWindowInt'>\n\
                        <fieldValue name='wallWindowTranslation' value='5.15 0 -16.90'/>\n\
                        <fieldValue name='wallWindowIntColor' value='1.0 0.0 0.0'/>\n\
                    </ProtoInstance> -->\n\
                    <prototype use='WallWithWindowInt' \n\
                        wallwindowintcolor = '0.541176471 0.658823529 0.870588235' \n\
                        wallwindowtranslation ='5.15 0 -16.90' \n\
                        wallwindowrotation ='-1 -1 -1 0' \n\
                        wallwindowinttextureurl ='' > \n\
                    </prototype>\n\
                 \n\
                    <Transform DEF='SideWall25Room2b' translation='5.3 1.4 -11.30'>\n\
                        <!-- <ProtoInstance name='WallInt'>\n\
                            <fieldValue name='wallIntColor' value='1.0 0.0 0.0' />\n\
                            <fieldValue name='wallIntScale' value='2.5 1.0 1.0' />\n\
                        </ProtoInstance> -->\n\
                        <prototype use='WallInt' \n\
                            wallIntColor ='0.541176471 0.658823529 0.870588235' \n\
                            wallIntScale ='2.5 1.0 1.0' \n\
                            wallinttextureurl =''\n\
                            wallinttexturetransformscale ='0.0'\n\
                            wallinttranslation ='0 0 0'\n\
                            wallintrotation ='-1 -1 -1 0' >\n\
                        </prototype>\n\
                    </Transform>\n\
            </Group>    \n\
        \n\
        <Transform translation='6.85 -0.90 -8.9'>\n\
        <Group DEF='HallIntWalls'> \n\
            <Transform rotation='0 1 0 3.14'>\n\
            <Shape >\n\
                <Appearance >\n\
                    <Material diffuseColor= '.7 .7 .7'/>\n\
                </Appearance>\n\
                <IndexedFaceSet  DEF='WallIntHall1920-FACES'  coordIndex=' 4 5 22 -1 22 23 4 -1 17 16 24 -1 24 25 17 -1 22 5 0 -1 0 26 22 -1 32 33 7 -1 7 6 32 -1 0 3 2 -1 2 1 0 -1 1 2 6 -1 6 7 1 -1 5 4 3 -1 3 0 5 -1 3 27 24 -1 24 16 2 -1 3 24 2 -1 23 27 3 -1 3 4 23 -1 19 14 8 -1 8 18 19 -1 19 20 15 -1 15 14 19 -1 14 15 11 -1 11 8 14 -1 8 11 10 -1 10 9 8 -1 12 9 10 -1 10 13 12 -1 29 10 11 -1 29 11 21 -1 21 17 25 -1 0 1 28 -1 26 0 28 -1 25 26 28 -1 21 25 28 -1 29 21 28 -1 37 31 9 -1 37 9 12 -1 37 12 34 -1 11 15 20 -1 20 21 11 -1 18 16 17 -1 18 17 21 -1 19 18 21 -1 20 19 21 -1 26 25 24 -1 22 26 24 -1 22 24 27 -1 23 22 27 -1 30 2 16 -1 31 30 16 -1 16 18 8 -1 16 8 9 -1 31 16 9 -1 12 13 35 -1 35 34 12 -1 37 34 35 -1 35 38 37 -1 40 33 32 -1 40 32 39 -1 36 40 39 -1 38 35 13 -1 38 13 10 -1 29 38 10 -1 39 32 6 -1 39 6 2 -1 30 39 2 -1 36 28 1 -1 36 1 7 -1 40 36 7 -1 33 40 7 -1 39 37 38 -1 38 36 39 -1 36 38 29 -1 29 28 36 -1 37 39 30 -1 30 31 37 -1' solid='true' ccw='true'>\n\
                    <Coordinate  DEF='WallIntHall1920-COORD'  point='0.1 2.9 6.85, 0.1 2.9 5.65, -0.1 2.9 5.65, -0.1 2.9 6.85, -0.1 0.0 6.85, 0.1 0.0 6.85, -0.1 0.0 5.65, 0.1 0.0 5.65, -0.1 2.9 -6.85, -0.1 2.9 -5.65, 0.1 2.9 -5.65, 0.1 2.9 -6.85, -0.1 0.0 -5.65, 0.1 0.0 -5.65, -0.1 0.0 -6.85, 0.1 0.0 -6.85, -0.1 4.587 -7.451, 0.1 4.587 -7.451, -0.1 4.177 -7.451, -0.1 0.0 -7.451, 0.1 0.0 -7.451, 0.1 4.177 -7.451, 0.1 0.0 7.08, -0.1 0.0 7.08, -0.1 4.6 7.08, 0.1 4.6 7.08, 0.1 3.389 7.08, -0.1 3.389 7.08, 0.1 2.9 0.6, 0.1 2.9 -0.6, -0.1 2.9 0.6, -0.1 2.9 -0.6, -0.1 0.0 0.6, 0.1 0.0 0.6, -0.1 0.0 -0.6, 0.1 0.0 -0.6, 0.1 2.1 0.6, -0.1 2.1 -0.6, 0.1 2.1 -0.6, -0.1 2.1 0.6, 0.1 2.098 0.6, '/>\n\
                </IndexedFaceSet>\n\
            </Shape>\n\
            </Transform>\n\
            <Transform  DEF='HallInt'  translation='2.6 0.0 7.40'>\n\
                <Group DEF='HallWall'>\n\
                    <Shape>\n\
                        <IndexedFaceSet  DEF='EntranceInt-FACES'  coordIndex=' 3 1 20 -1 20 21 3 -1 4 5 7 -1 7 6 4 -1 1 3 7 -1 7 5 1 -1 2 0 4 -1 4 6 2 -1 8 11 10 -1 10 9 8 -1 13 14 11 -1 11 8 13 -1 14 13 12 -1 12 15 14 -1 9 10 15 -1 15 12 9 -1 9 0 24 -1 9 24 27 -1 8 9 27 -1 4 0 9 -1 9 12 4 -1 22 3 21 -1 14 15 6 -1 6 7 14 -1 20 1 23 -1 24 0 2 -1 2 25 24 -1 16 13 8 -1 8 27 16 -1 10 11 26 -1 2 10 26 -1 25 2 26 -1 26 19 16 -1 26 16 27 -1 25 26 27 -1 24 25 27 -1 21 20 23 -1 22 21 23 -1 22 23 17 -1 22 17 18 -1 16 19 18 -1 18 17 16 -1 10 2 6 -1 6 15 10 -1 18 19 14 -1 14 7 18 -1 19 26 11 -1 11 14 19 -1 4 12 13 -1 13 16 17 -1 13 17 5 -1 13 5 4 -1 18 7 33 -1 18 33 28 -1 22 18 28 -1 22 28 29 -1 3 22 29 -1 7 3 29 -1 7 29 32 -1 33 7 32 -1 34 35 5 -1 34 5 17 -1 31 34 17 -1 31 17 23 -1 30 31 23 -1 30 23 1 -1 30 1 5 -1 30 5 35 -1 32 35 34 -1 34 33 32 -1 33 34 31 -1 31 28 33 -1 29 28 31 -1 31 30 29 -1 32 29 30 -1 30 35 32 -1' solid='true' ccw='true'>\n\
                            <Coordinate  DEF='EntranceInt-COORD'  point='-2.5 0.0 0.075, 2.5 0.0 0.075, -2.5 0.0 -0.075, 2.5 0.0 -0.075, -2.5 4.6 0.075, 2.5 4.6 0.075, -2.5 4.6 -0.075, 2.5 4.6 -0.075, -1.3 0.9 0.075, -1.9 0.9 0.075, -1.9 0.9 -0.075, -1.3 0.9 -0.075, -1.9 3.9 0.075, -1.3 3.9 0.075, -1.3 3.9 -0.075, -1.9 3.9 -0.075, -0.9 3.8 0.075, 0.9 3.8 0.075, 0.9 3.8 -0.075, -0.9 3.8 -0.075, 0.9 0.0 0.075, 0.9 0.0 -0.075, 0.9 0.3789 -0.075, 0.9 0.3789 0.075, -0.9 0.0 0.075, -0.9 0.0 -0.075, -0.9 0.8053 -0.075, -0.9 0.8053 0.075, 1.3 0.9 -0.075, 1.9 0.9 -0.075, 1.9 0.9 0.075, 1.3 0.9 0.075, 1.9 3.9 -0.075, 1.3 3.9 -0.075, 1.3 3.9 0.075, 1.9 3.9 0.075, '/>\n\
                        </IndexedFaceSet>\n\
                        <Appearance>\n\
                            <Material  diffuseColor= '.7 .7 .7'/>\n\
                        </Appearance>\n\
                    </Shape>\n\
                </Group>\n\
            </Transform>\n\
            <Transform translation='2.60 0.0 -7.00'>\n\
                <Group USE='HallWall' />\n\
            </Transform>\n\
            <!--<Transform  translation='-6.7 0.9 8.30' >\n\
                    <Inline  bboxCenter='0.0 0.0 0.0' url=''escada.x3d'' bboxSize='5.0 5.0 5.0'/>\n\
            </Transform>-->\n\
        </Group>\n\
        </Transform>\n\
    \
    ";
}
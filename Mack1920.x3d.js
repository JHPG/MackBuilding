function Mack1920(attr){ 	//nome do Prototype
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
		</ExternProtoDeclare>  \n\
			<WorldInfo info='adding new partition walls' title='Mackenzie Building 1920 - School of Engineering'/>--> \n\
\n\
			<Group DEF='WallIntRoom1a_1920'>\n\
				<!-- <MetadataSet name='Room1a' reference='Room1a in School of Engineering due the division of Room1'>\n\
						<MetadataString name='wasDividedIn' value='Room1aa'/>\n\
						<MetadataString name='wasDividedIn' value='Room1ab'/>\n\
						<MetadataString name='isIncorporatedIn' value='MackenzieBuilding'/>\n\
						<MetadataString name='isComposedOf' value='ExternalWall'/>\n\
						<MetadataString name='isComposedOf' value='InternalWall'/>\n\
						<MetadataString name='isComposedOf' value='PartitionWall'/>\n\
						<MetadataString name='occursDuring' value='SchoolOfEngineering'/>\n\
						<MetadataInteger name='startTime' value='1920'/>\n\
						<MetadataInteger name='finishTime' value='1952'/>\n\
						<MetadataInteger name='wasChangedIn' value='1952'/>\n\
				   </MetadataSet> -->\n\
				<Transform DEF='SideWall1' translation='2.85 1.4 -6.1' onmouseover=\" showText('Parede divisória: feita em tabique, ou seja, madeira vazada internamente, coberta por juta e tela de arame para segurar a argamassa. Técnica construtiva comum na época.Construída em 1920 e substituída em 1998, por parede de alvenaria.', ''); \">\n\
					<!-- <MetadataSet name='PartitionWall' reference='partition wall made wood leaked internally, covered with jute and wire mesh to hold the mortar'>\n\
						<MetadataString name='consistsOf' value='Wood'/>\n\
						<MetadataString name='consistsOf' value='Mortar'/>\n\
						<MetadataString name='consistsOf' value='Jute'/>\n\
					</MetadataSet> -->\n\
					<!-- <ProtoInstance name='WallInt'>\n\
						<fieldValue name='wallIntColor' value='1.0 1.0 1.0' />\n\
						<fieldValue name='wallIntScale' value='7.4 1.0 0.5' />\n\
					</ProtoInstance> -->\n\
					<prototype use='WallInt' \n\
						wallIntColor ='0.709803922 0.780392157 0.776470588' \n\
						wallIntScale ='7.4 1.0 0.5' \n\
						wallinttextureurl ='' \n\
						wallinttexturetransformscale ='0.0' \n\
						wallinttranslation ='0 0 0' \n\
						wallintrotation ='-1 -1 -1 0' >\n\
					</prototype>\n\
				</Transform>\n\
				<Group DEF='FrontWallInt'>\n\
				  <Transform DEF='FrontWall' translation='0.75 0 0'>\n\
					<Transform translation='-1.225 1.4 -0.25'>\n\
						 <Group DEF='Wall75'>\n\
							 <!-- <ProtoInstance name='WallInt'>\n\
								<fieldValue name='wallIntColor' value='1.0 1.0 1.0'/>\n\
								<fieldValue name='wallIntScale' value='0.75 1 1'/>\n\
							</ProtoInstance> -->\n\
							<prototype use='WallInt' \n\
								wallIntColor ='0.709803922 0.780392157 0.776470588' \n\
								wallIntScale ='0.75 1 1' \n\
								wallinttextureurl ='' \n\
								wallinttexturetransformscale ='0.0' \n\
								wallinttranslation ='0 0 0' \n\
								wallintrotation ='-1 -1 -1 0' >\n\
							</prototype>\n\
						 </Group>\n\
					</Transform>\n\
					<!-- <ProtoInstance name='WallWithWindowInt'>\n\
						<fieldValue name='wallWindowIntColor' value='1.0 1.0 1.0'/>\n\
					</ProtoInstance> -->\n\
					<prototype use='WallWithWindowInt'\n\
						wallwindowintcolor ='0.709803922 0.780392157 0.776470588' \n\
						wallwindowtranslation ='0 0 0'\n\
						wallwindowrotation ='-1 -1 -1 0'\n\
						wallwindowinttextureurl ='' >\n\
					</prototype>\n\
\n\
					<Transform translation='1.1 1.40 -0.25'> \n\
						<Group DEF='wall50'>\n\
							<!-- <ProtoInstance name='WallInt'>\n\
								<fieldValue name='wallIntColor' value='1.0 1.0 1.0'/>\n\
								<fieldValue name='wallIntScale' value='0.5 1 1'/>\n\
							</ProtoInstance> -->\n\
							<prototype use='WallInt' \n\
								wallIntColor ='0.709803922 0.780392157 0.776470588' \n\
								wallIntScale ='0.5 1 1' \n\
								wallinttextureurl ='' \n\
								wallinttexturetransformscale ='0.0' \n\
								wallinttranslation ='0 0 0' \n\
								wallintrotation ='-1 -1 -1 0' >\n\
							</prototype>\n\
						</Group>\n\
					</Transform>\n\
					<!-- <ProtoInstance name='WallWithWindowInt'>\n\
						<fieldValue name='wallWindowTranslation' value='2.2 0 0'/>\n\
						<fieldValue name='wallWindowIntColor' value='1.0 1.0 1.0'/>\n\
					</ProtoInstance> -->\n\
					<prototype use='WallWithWindowInt'\n\
						wallwindowintcolor ='0.709803922 0.780392157 0.776470588' \n\
						wallwindowtranslation ='2.2 0 0'\n\
						wallwindowrotation ='-1 -1 -1 0'\n\
						wallwindowinttextureurl ='' >\n\
					</prototype>\n\
\n\
					<Transform translation='3.3 1.40 -0.25'>\n\
						<Group USE='wall50' />\n\
					</Transform>\n\
					<!-- <ProtoInstance name='WallWithWindowInt'>\n\
						<fieldValue name='wallWindowTranslation' value='4.4 0 0'/>\n\
						<fieldValue name='wallWindowIntColor' value='1.0 1.0 1.0'/>\n\
					</ProtoInstance> -->\n\
					<prototype use='WallWithWindowInt'\n\
						wallwindowintcolor ='0.709803922 0.780392157 0.776470588' \n\
						wallwindowtranslation ='4.4 0 0'\n\
						wallwindowrotation ='-1 -1 -1 0'\n\
						wallwindowinttextureurl ='' >\n\
					</prototype>\n\
\n\
					<Transform translation='5.625 1.4 -0.25'>\n\
						<Group USE='Wall75' />\n\
					</Transform>\n\
				  </Transform>\n\
				</Group>\n\
				<Transform DEF='SideWall2Room1a' translation='0 0 -0.5'>\n\
					<Transform rotation='0 1 0 -1.57' translation='-1.2 0 -2.25'>\n\
						<Transform translation='1.725 1.4 -0.25'>\n\
							<Group DEF='Wall175'>\n\
								<!-- <ProtoInstance name='WallInt'>\n\
									<fieldValue name='wallIntColor' value='1.0 1.0 1.0'/>\n\
									<fieldValue name='wallIntScale' value='1.75 1 1'/>\n\
								</ProtoInstance> -->\n\
								<prototype use='WallInt' \n\
									wallIntColor ='0.709803922 0.780392157 0.776470588' \n\
									wallIntScale ='1.75 1 1' \n\
									wallinttextureurl ='' \n\
									wallinttexturetransformscale ='0.0' \n\
									wallinttranslation ='0 0 0' \n\
									wallintrotation ='-1 -1 -1 0'>\n\
								</prototype>\n\
							</Group>    \n\
						</Transform>\n\
						<Group DEF='wallWindowSide'>\n\
							<!-- <ProtoInstance name='WallWithWindowInt'>\n\
								<fieldValue name='wallWindowIntColor' value='1.0 1.0 1.0'/> \n\
							</ProtoInstance> -->\n\
							<prototype use='WallWithWindowInt'\n\
								wallwindowintcolor ='0.709803922 0.780392157 0.776470588' \n\
								wallwindowtranslation ='0 0 0'\n\
								wallwindowrotation ='-1 -1 -1 0'\n\
								wallwindowinttextureurl ='' >\n\
							</prototype>\n\
\n\
							<Transform translation='-1.70 0 0'>\n\
								<!-- <ProtoInstance name='WallWithWindowInt'>\n\
									<fieldValue name='wallWindowIntColor' value='1.0 1.0 1.0'/> \n\
								</ProtoInstance> -->\n\
								<prototype use='WallWithWindowInt'\n\
									wallwindowintcolor ='0.709803922 0.780392157 0.776470588' \n\
									wallwindowtranslation ='0 0 0'\n\
									wallwindowrotation ='-1 -1 -1 0'\n\
									wallwindowinttextureurl ='' >\n\
								</prototype>\n\
							</Transform>\n\
						</Group>\n\
		  \n\
						<Transform translation='-2.975 1.40 -0.25'>\n\
							<Group DEF='Wall85'>\n\
								<!-- <ProtoInstance name='WallInt'>\n\
									<fieldValue name='wallIntColor' value='1.0 1.0 1.0'/>\n\
									<fieldValue name='wallIntScale' value='0.85 1 1'/>\n\
								</ProtoInstance> -->\n\
								<prototype use='WallInt' \n\
									wallIntColor ='0.709803922 0.780392157 0.776470588' \n\
									wallIntScale ='0.85 1 1' \n\
									wallinttextureurl ='' \n\
									wallinttexturetransformscale ='0.0' \n\
									wallinttranslation ='0 0 0' \n\
									wallintrotation ='-1 -1 -1 0'>\n\
								</prototype>\n\
							</Group>\n\
						</Transform>\n\
					</Transform> \n\
				</Transform>\n\
				<Transform DEF='WallDoorRoom1a' rotation='0 1 0 3.14' translation='6.65 -0.90 -5.775'>\n\
					<Shape >\n\
						<Appearance >\n\
							<Material  diffuseColor='0.709803922 0.780392157 0.776470588'/>\n\
						</Appearance>\n\
						<IndexedFaceSet  DEF='DoorWallIntRomm1a-FACES'  coordIndex=' 8 9 12 -1 12 13 8 -1 3 2 14 -1 14 15 3 -1 1 0 2 -1 2 3 1 -1 12 9 4 -1 4 16 12 -1 6 2 0 -1 0 10 6 -1 0 1 11 -1 11 10 0 -1 4 7 6 -1 6 5 4 -1 5 6 10 -1 10 11 5 -1 9 8 7 -1 7 4 9 -1 4 5 3 -1 4 3 15 -1 4 15 16 -1 5 11 1 -1 1 3 5 -1 7 17 14 -1 7 14 2 -1 7 2 6 -1 13 17 7 -1 7 8 13 -1 16 15 14 -1 12 16 14 -1 12 14 17 -1 13 12 17 -1' solid='true' ccw='true'>\n\
							<Coordinate  DEF='DoorWallIntRomm1a-COORD'  point='-0.1 0.0 -5.425, 0.1 0.0 -5.425, -0.1 4.6 -5.425, 0.1 4.6 -5.425, 0.1 2.9 -2.525, 0.1 2.9 -3.725, -0.1 2.9 -3.725, -0.1 2.9 -2.525, -0.1 0.0 -2.525, 0.1 0.0 -2.525, -0.1 0.0 -3.725, 0.1 0.0 -3.725, 0.1 0.0 0.375, -0.1 0.0 0.375, -0.1 4.6 0.375, 0.1 4.6 0.375, 0.1 3.52 0.375, -0.1 3.52 0.375, '/>\n\
						</IndexedFaceSet>\n\
					</Shape>\n\
				</Transform>\n\
			</Group>\n\
			<Group DEF='WallIntRoom1b_1920'>\n\
				   <Transform rotation='0 1 0 -1.57' translation='-1.205 0 -7.85'>\n\
						<Group USE='wallWindowSide' />\n\
				   </Transform>\n\
				   <Transform rotation='0 1 0 -1.57' translation='-0.955 1.4 -6.575'>\n\
						<Group USE='Wall85' />\n\
				   </Transform>\n\
				   <Transform rotation='0 1 0 -1.57' translation='-0.955 1.4 -10.825'>\n\
						<Group USE='Wall85' />\n\
				   </Transform> \n\
				   <Transform translation='0 0 -0.1'>\n\
						<Group USE='SideWall1' />\n\
				   </Transform>\n\
				   <Group DEF='WallInt74x20' onmouseover=\" showText('Sala 1 da Escola de Engenharia foi dividida em duas salas. Modificação feita em 1920', ''); \">\n\
					   <Transform translation='2.85 1.4 -11.1'>\n\
							<!-- <ProtoInstance name='WallInt'>\n\
								<fieldValue name='wallIntColor' value='1.0 1.0 1.0' />\n\
								<fieldValue name='wallIntScale' value='7.4 1.0 1.0' />\n\
							</ProtoInstance> -->\n\
							<prototype use='WallInt' \n\
								wallIntColor ='0.709803922 0.780392157 0.776470588' \n\
								wallIntScale ='7.4 1.0 1.0' \n\
								wallinttextureurl ='' \n\
								wallinttexturetransformscale ='0.0' \n\
								wallinttranslation ='0 0 0' \n\
								wallintrotation ='-1 -1 -1 0'>\n\
							</prototype>\n\
					   </Transform>\n\
					</Group>\n\
					<Transform DEF='WallDoorRoom1b' translation='6.65 -0.90 -5.775'>\n\
						<Shape >\n\
							<Appearance >\n\
								<Material  diffuseColor='0.709803922 0.780392157 0.776470588'/>\n\
							</Appearance>\n\
							<IndexedFaceSet  DEF='DoorWallIntRoom1b-FACES'  coordIndex=' 8 9 12 -1 12 13 8 -1 3 2 14 -1 14 15 3 -1 1 0 2 -1 2 3 1 -1 18 4 16 -1 18 16 12 -1 18 12 9 -1 19 6 2 -1 19 2 0 -1 19 0 10 -1 0 1 11 -1 11 10 0 -1 10 11 20 -1 20 19 10 -1 21 18 9 -1 9 8 21 -1 4 5 3 -1 4 3 15 -1 4 15 16 -1 20 11 1 -1 20 1 3 -1 5 20 3 -1 7 17 14 -1 7 14 2 -1 7 2 6 -1 21 8 13 -1 21 13 17 -1 7 21 17 -1 16 15 14 -1 12 16 14 -1 12 14 17 -1 13 12 17 -1 20 18 21 -1 21 19 20 -1 19 21 7 -1 7 6 19 -1 18 20 5 -1 5 4 18 -1' solid='true' ccw='true'>\n\
								<Coordinate  DEF='DoorWallIntRoom1b-COORD'  point='-0.1 0.0 -5.425, 0.1 0.0 -5.425, -0.1 4.6 -5.425, 0.1 4.6 -5.425, 0.1 2.9 -2.525, 0.1 2.9 -3.725, -0.1 2.9 -3.725, -0.1 2.9 -2.525, -0.1 0.0 -2.525, 0.1 0.0 -2.525, -0.1 0.0 -3.725, 0.1 0.0 -3.725, 0.1 0.0 0.375, -0.1 0.0 0.375, -0.1 4.6 0.375, 0.1 4.6 0.375, 0.1 3.52 0.375, -0.1 3.52 0.375, 0.1 2.1 -2.525, -0.1 2.1 -3.725, 0.1 2.1 -3.725, -0.1 2.1 -2.525, '/>\n\
							</IndexedFaceSet>\n\
						</Shape>\n\
					</Transform>\n\
			</Group>\n\
			<Group DEF='WallIntRoom2_1920'>\n\
				<Transform translation='0 0 -0.2'>\n\
					<Group USE='WallInt74x20' />\n\
				</Transform>\n\
				<Transform  DEF='WallDoorRoom2' rotation='0 1 0 3.14' translation='6.65 -0.90 -14.325'>\n\
					<Shape >\n\
						<Appearance >\n\
							<Material  diffuseColor='0.709803922 0.780392157 0.776470588'/>\n\
						</Appearance>\n\
						<IndexedFaceSet  DEF='DoorWallIntRoom2-FACES'  coordIndex=' 12 13 1 -1 1 0 12 -1 4 5 7 -1 7 6 4 -1 0 1 5 -1 5 4 0 -1 3 2 6 -1 6 7 3 -1 9 15 3 -1 9 3 7 -1 9 7 5 -1 8 9 5 -1 8 5 1 -1 8 1 13 -1 11 12 0 -1 11 0 4 -1 10 11 4 -1 10 4 6 -1 10 6 2 -1 10 2 14 -1 2 3 15 -1 15 14 2 -1 8 11 10 -1 10 9 8 -1 9 10 14 -1 14 15 9 -1 13 12 11 -1 11 8 13 -1' solid='true' ccw='true'>\n\
							<Coordinate  DEF='DoorWallIntRoom2-COORD'  point='-0.1 0.0 3.125, 0.1 0.0 3.125, -0.1 0.0 -3.125, 0.1 0.0 -3.125, -0.1 4.6 3.125, 0.1 4.6 3.125, -0.1 4.6 -3.125, 0.1 4.6 -3.125, 0.1 2.9 1.425, 0.1 2.9 0.225, -0.1 2.9 0.225, -0.1 2.9 1.425, -0.1 0.0 1.425, 0.1 0.0 1.425, -0.1 0.0 0.225, 0.1 0.0 0.225, '/>\n\
						</IndexedFaceSet>\n\
					</Shape>\n\
				</Transform>\n\
				<Transform translation='0 0 -16.94'>\n\
					<Group USE='FrontWallInt' />\n\
				</Transform>\n\
				<Transform rotation='0 1 0 -1.57' translation='-0.955 1.4 -11.675'>\n\
						<Group USE='Wall85' />\n\
				</Transform>                 \n\
				\n\
				<Transform rotation='0 1 0 -1.57' translation='-1.2 0 -2.75'>\n\
					<Transform translation='-10.20 0 0'>\n\
						<Group USE='wallWindowSide' />\n\
					</Transform>\n\
				</Transform>\n\
				<Transform rotation='0 1 0 -1.57' translation='-0.95 1.4 -16.365'>\n\
					  <Group USE='Wall175' />\n\
				</Transform>\n\
				\n\
			</Group>\n\
		\n\
		<Transform translation='6.85 -0.90 -8.9'>\n\
		<Group DEF='HallIntWalls' onmouseover=\" showText('A escada foi refeita e ficou voltada para a entrada do Campus. Foi alterada, provavelmente, em 1920, e assim permanece até hoje.', ''); \"> \n\
			<Transform rotation='0 1 0 3.14'>\n\
			<Shape >\n\
				<Appearance >\n\
					<Material  diffuseColor='0.709803922 0.780392157 0.776470588'/>\n\
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
							<Material  diffuseColor='0.709803922 0.780392157 0.776470588'/>\n\
						</Appearance>\n\
					</Shape>\n\
				</Group>\n\
			</Transform>\n\
			<Transform translation='2.60 0.0 -7.00'>\n\
				<Group USE='HallWall' />\n\
			</Transform>\n\
			<!--<Transform  translation='-6.7 0.9 8.30' >\n\
					<Inline  bboxCenter='0.0 0.0 0.0' url=''escada.x3d'' bboxSize='5.0 5.0 5.0'/>\n\
					<prototype use='escada'> </prototype>\n\
			</Transform>-->\n\
		</Group>\n\
		</Transform>\n\
\n\
		<!-- Switch dos textos --><!-- Escada no Building -->\n\
		<!--<Switch DEF='Switcher1920' whichChoice='0' id='textos1896'>\n\
		<Group>\n\
				<Transform translation='-6 4 0'>\n\
					<Shape DEF='Text2'>\n\
						<Appearance DEF='msgAp'>\n\
							<Material diffuseColor='0.709803922 0.780392157 0.776470588'/>\n\
						</Appearance> \n\
						<Text DEF='msg' maxExtent='0.000' string='\"Atento para a hist&oacute;ria\" \"Passe o mouse pelo Edif&iacute;cio\"' solid='false'>\n\
							<FontStyle justify=''BEGIN' 'BEGIN'' size='.500'/>\n\
						</Text>\n\
					</Shape>\n\
				</Transform>\n\
			</Group>\n\
\n\
			<Group>\n\
				<Transform translation='-6 4 0'>\n\
					<Shape DEF='Text2'>\n\
						<Appearance DEF='msgAp'>\n\
							<Material diffuseColor='0.709803922 0.780392157 0.776470588'/>\n\
						</Appearance> \n\
						<Text DEF='msg' maxExtent='0.000' string='\"Parede divisória: feita em tabique,\" \"ou seja, madeira vazada internamente,\" \"coberta por juta e \" \"tela de arame para segurar a argamassa.\" \"Técnica construtiva comum na época.\" \"Construída em 1920 e substituída em 1998,\" \"por parede de alvenaria.\"' solid='false'>\n\
							<FontStyle justify=''BEGIN' 'BEGIN'' size='.500'/>\n\
						</Text>\n\
					</Shape>\n\
				</Transform>\n\
			</Group>\n\
\n\
			<Group>\n\
				<Transform translation='-6 4 0'>\n\
					<Shape>\n\
						<Appearance>\n\
							<Material diffuseColor='0.709803922 0.780392157 0.776470588'/>\n\
						</Appearance> \n\
						<Text USE='msg' string='\"Sala 1 da Escola de Engenharia foi dividida\" \"em duas salas,\" \"modificação feita em 1920\"' />\n\
					</Shape>\n\
				</Transform>\n\
			</Group>\n\
\n\
			<Group>\n\
				<Transform translation='-6 4 0'>\n\
					<Shape>\n\
						<Appearance>\n\
							<Material diffuseColor='0.709803922 0.780392157 0.776470588'/>\n\
						</Appearance> \n\
						<Text maxExtent='0.000' string='\"A escada foi refeita e ficou voltada\" \"para a entrada do Campus.\" \"Foi alterada, provavelmente, em 1920,\" \"e assim permanece até hoje.\"' solid='false'>\n\
							<FontStyle justify=''BEGIN' 'BEGIN'' size='.500'/>\n\
						</Text>\n\
					</Shape>\n\
				</Transform>\n\
			</Group>\n\
\n\
		</Switch>-->\n\
	\
	";
}


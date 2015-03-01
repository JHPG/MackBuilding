function Mack1896(attr){ 	//nome do Prototype
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
		<WorldInfo info='School of Engineering' title='Mackenzie Building 1896 - School of Engineering' /> -->\n\
		<Group DEF='forniture1896'>\n\
				<Group DEF='Room1'>\n\
					<Transform>\n\
						<!-- <Inline DEF='ChairTable' url='models/ChairTable.x3d' /> -->\n\
						<prototype use='ChairTable'></prototype>\n\
					</Transform>\n\
				  </Group>\n\
				\n\
				<Group DEF='FornitureRoom2'>\n\
				  <Group DEF='tableRoom2'>\n\
					<Transform translation='1 -0.9 -12.3' rotation='0 1 0 1.57' scale='1.5 1.5 1.5'>\n\
						<prototype use='Table'></prototype>\n\
						<!-- <Inline DEF='Table' url='models/Table.x3d' /> -->\n\
					</Transform>\n\
				  </Group>\n\
				  <Group DEF='chairRoom2'>\n\
					<Transform translation='0 -0.9 -12' scale='1.5 1.5 1.5'>\n\
						<prototype use='Chair'></prototype>\n\
						<!-- <Inline DEF='Chair' url='models/Chair.x3d' /> -->\n\
					</Transform>\n\
				  </Group>\n\
				</Group>\n\
				<Transform translation='2 0 0'>\n\
						<Group USE='FornitureRoom2' />\n\
				</Transform>\n\
				<Transform translation='4 0 0'>\n\
						<Group USE='FornitureRoom2' />\n\
				</Transform>\n\
			</Group>\n\
			\n\
			<Group DEF='WallIntRoom1' onmouseover=\" showText('Sala 1 foi dividida em 2 salas, durante o funcionamento da Escola de Engenharia.', 'Sala1_1896.mp3'); \">\n\
\
				<!-- <WorldInfo info='Room1 Internal Wall' title='Mackenzie Building 1896'>\n\
				   <MetadataSet name='Room1' reference='Room1 in School of Engineering'>\n\
						<MetadataString name='wasDividedIn' value='Room1a'/>\n\
						<MetadataString name='wasDividedIn' value='Room1b'/>\n\
						<MetadataString name='isIncorporatedIn' value='MackenzieBuilding'/>\n\
						<MetadataString name='isComposedOf' value='ExternalWall'/>\n\
						<MetadataString name='isComposedOf' value='InternalWall'/>\n\
						<MetadataString name='occursDuring' value='SchoolOfEngineering'/>\n\
						<MetadataInteger name='startTime' value='1896'/>\n\
						<MetadataInteger name='finishTime' value='1920'/>\n\
						<MetadataInteger name='wasChangedIn' value='1920'/>\n\
				   </MetadataSet> \n\
				</WorldInfo> -->\n\
				<Transform DEF='SideWall1' translation='2.85 1.4 -11.1'>\n\
					<!-- <ProtoInstance name='WallInt'>\n\
						<fieldValue name='wallIntColor' value='0.58 0.72 0.95' />\n\
						<fieldValue name='wallIntScale' value='7.4 1.0 1.0' />\n\
					</ProtoInstance> -->\n\
					<prototype use='WallInt' \n\
						wallIntColor ='0.63 0.49 0.37' \n\
						wallIntScale ='7.4 1.0 1.0' \n\
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
							<!--  <ProtoInstance name='WallInt'>\n\
								<fieldValue name='wallIntColor' value='0.58 0.72 0.95'/>\n\
								<fieldValue name='wallIntScale' value='0.75 1 1'/>\n\
							</ProtoInstance> -->\n\
							<prototype use='WallInt' \n\
								wallIntColor ='0.63 0.49 0.37' \n\
								wallIntScale ='0.75 1 1' \n\
								wallinttextureurl =''\n\
								wallinttexturetransformscale ='0.0'\n\
								wallinttranslation ='0 0 0'\n\
								wallintrotation ='-1 -1 -1 0' >\n\
							</prototype>\n\
						 </Group>\n\
					</Transform>\n\
					<!-- <ProtoInstance name='WallWithWindowInt'>\n\
						<fieldValue name='wallWindowIntColor' value='0.58 0.72 0.95'/>\n\
					</ProtoInstance> -->\n\
					<prototype use='WallWithWindowInt'\n\
						wallwindowintcolor ='0.63 0.49 0.37'\n\
						wallwindowtranslation ='0 0 0'\n\
						wallwindowrotation ='-1 -1 -1 0'\n\
						wallwindowinttextureurl ='' >\n\
					</prototype>\n\
					<Transform translation='1.1 1.40 -0.25'> \n\
						<Group DEF='wall50'>\n\
							<!-- <ProtoInstance name='WallInt'>\n\
								<fieldValue name='wallIntColor' value='0.58 0.72 0.95'/>\n\
								<fieldValue name='wallIntScale' value='0.5 1 1'/>\n\
							</ProtoInstance> -->\n\
							<prototype use='WallInt' \n\
								wallIntColor ='0.63 0.49 0.37' \n\
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
						<fieldValue name='wallWindowIntColor' value='0.58 0.72 0.95'/>\n\
					</ProtoInstance> -->\n\
					<prototype use='WallWithWindowInt'\n\
						wallwindowintcolor ='0.63 0.49 0.37'\n\
						wallwindowtranslation ='2.2 0 0'\n\
						wallwindowrotation ='-1 -1 -1 0'\n\
						wallwindowinttextureurl ='' >\n\
					</prototype>\n\
					<Transform translation='3.3 1.40 -0.25'>\n\
						<Group USE='wall50' />\n\
					</Transform>\n\
					<!-- <ProtoInstance name='WallWithWindowInt'>\n\
						<fieldValue name='wallWindowTranslation' value='4.4 0 0'/>\n\
						<fieldValue name='wallWindowIntColor' value='0.58 0.72 0.95'/>\n\
					</ProtoInstance> -->\n\
					<prototype use='WallWithWindowInt'\n\
						wallwindowintcolor ='0.63 0.49 0.37'\n\
						wallwindowtranslation ='4.4 0 0'\n\
						wallwindowrotation ='-1 -1 -1 0'\n\
						wallwindowinttextureurl ='' >\n\
					</prototype>\n\
					<Transform translation='5.625 1.4 -0.25'>\n\
						<Group USE='Wall75' />\n\
					</Transform>\n\
				  </Transform>\n\
				</Group>\n\
				<Transform DEF='SideWall2' translation='0 0 -0.5'>\n\
					<Transform rotation='0 1 0 -1.57' translation='-1.2 0 -2.25'>\n\
						<Transform translation='1.725 1.4 -0.25'>\n\
							<Group DEF='Wall175'>\n\
								<!-- <ProtoInstance name='WallInt'>\n\
									<fieldValue name='wallIntColor' value='0.58 0.72 0.95'/>\n\
									<fieldValue name='wallIntScale' value='1.75 1 1'/>\n\
								</ProtoInstance> -->\n\
								<prototype use='WallInt' \n\
									wallIntColor ='0.63 0.49 0.37' \n\
									wallIntScale ='1.75 1 1' \n\
									wallinttextureurl =''\n\
									wallinttexturetransformscale ='0.0'\n\
									wallinttranslation ='0 0 0'\n\
									wallintrotation ='-1 -1 -1 0' >\n\
								</prototype>\n\
							</Group>    \n\
						</Transform>\n\
						<Group DEF='wallWindowSide'>\n\
							<!-- <ProtoInstance name='WallWithWindowInt'>\n\
								<fieldValue name='wallWindowIntColor' value='0.58 0.72 0.95'/> \n\
							</ProtoInstance> -->\n\
							<prototype use='WallWithWindowInt' \n\
								wallwindowintcolor ='0.63 0.49 0.37' \n\
								wallwindowtranslation ='0 0 0' \n\
								wallwindowrotation ='-1 -1 -1 0' \n\
								wallwindowinttextureurl ='' >\n\
							</prototype>\n\
							<Transform translation='-1.70 0 0'>\n\
								<!-- <ProtoInstance name='WallWithWindowInt'>\n\
									<fieldValue name='wallWindowIntColor' value='0.58 0.72 0.95'/> \n\
								</ProtoInstance> -->\n\
								<prototype use='WallWithWindowInt' \n\
									wallwindowintcolor ='0.63 0.49 0.37' \n\
									wallwindowtranslation ='0 0 0' \n\
									wallwindowrotation ='-1 -1 -1 0' \n\
									wallwindowinttextureurl ='' >\n\
								</prototype>\n\
							</Transform>\n\
						</Group>\n\
						<Transform translation='-3.4 1.40 -0.25'>\n\
							<Group DEF='Wall170'>\n\
								<!-- <ProtoInstance name='WallInt'>\n\
									<fieldValue name='wallIntColor' value='0.58 0.72 0.95'/>\n\
									<fieldValue name='wallIntScale' value='1.7 1 1'/>\n\
								</ProtoInstance> -->\n\
								<prototype use='WallInt' \n\
									wallIntColor ='0.63 0.49 0.37' \n\
									wallIntScale ='1.7 1 1' \n\
									wallinttextureurl =''\n\
									wallinttexturetransformscale ='0.0'\n\
									wallinttranslation ='0 0 0'\n\
									wallintrotation ='-1 -1 -1 0' >\n\
								</prototype>\n\
							</Group>\n\
						</Transform>\n\
						<Transform translation='-5.10 0 0'>\n\
							<Group USE='wallWindowSide' />\n\
						</Transform>\n\
						<Transform translation='-8.05 1.4 -0.25'>\n\
							<!-- <ProtoInstance name='WallInt'>\n\
								 <fieldValue name='wallIntColor' value='0.58 0.72 0.95'/>\n\
								 <fieldValue name='wallIntScale' value='0.8 1 1'/>\n\
							</ProtoInstance> -->\n\
							<prototype use='WallInt' \n\
								wallIntColor ='0.63 0.49 0.37' \n\
								wallIntScale ='0.8 1 1' \n\
								wallinttextureurl =''\n\
								wallinttexturetransformscale ='0.0'\n\
								wallinttranslation ='0 0 0'\n\
								wallintrotation ='-1 -1 -1 0' >\n\
							</prototype>\n\
						</Transform>\n\
					</Transform> \n\
				</Transform>\n\
				<Transform DEF='WallDoorRoom1' rotation='0 1 0 3.14' translation='6.65 -0.90 -5.775'>\n\
					<Shape >\n\
						<Appearance >\n\
							<Material  diffuseColor='0.63 0.49 0.37'/>\n\
						</Appearance>\n\
						<IndexedFaceSet  DEF='DoorWallIntRoom1-FACES'  coordIndex=' 12 13 1 -1 1 0 12 -1 4 5 7 -1 7 6 4 -1 0 1 5 -1 5 4 0 -1 3 2 6 -1 6 7 3 -1 9 15 3 -1 9 3 7 -1 8 9 7 -1 8 7 5 -1 8 5 1 -1 8 1 13 -1 11 12 0 -1 11 0 4 -1 11 4 6 -1 10 11 6 -1 10 6 2 -1 10 2 14 -1 2 3 15 -1 15 14 2 -1 8 11 10 -1 10 9 8 -1 9 10 14 -1 14 15 9 -1 13 12 11 -1 11 8 13 -1' solid='true' ccw='true'>\n\
							<Coordinate  DEF='DoorWallIntRoom1-COORD'  point='-0.1 0.0 5.425, 0.1 0.0 5.425, -0.1 0.0 -5.425, 0.1 0.0 -5.425, -0.1 4.6 5.425, 0.1 4.6 5.425, -0.1 4.6 -5.425, 0.1 4.6 -5.425, 0.1 2.9 -2.525, 0.1 2.9 -3.725, -0.1 2.9 -3.725, -0.1 2.9 -2.525, -0.1 0.0 -2.525, 0.1 0.0 -2.525, -0.1 0.0 -3.725, 0.1 0.0 -3.725, '/>\n\
						</IndexedFaceSet>\n\
					</Shape>\n\
				</Transform>\n\
				<!-- <TouchSensor DEF='TSRoom1'/> -->\n\
			</Group>\n\
			<Group DEF='WallIntRoom2'>\n\
				<Transform translation='2.85 1.4 -11.3'>\n\
					<!-- <ProtoInstance name='WallInt'>\n\
						<fieldValue name='wallIntColor' value='0.58 0.72 0.95' />\n\
						<fieldValue name='wallIntScale' value='7.4 1.0 1.0' />\n\
					</ProtoInstance> -->\n\
					<prototype use='WallInt' \n\
						wallIntColor ='0.63 0.49 0.37' \n\
						wallIntScale ='7.4 1.0 1.0' \n\
						wallinttextureurl =''\n\
						wallinttexturetransformscale ='0.0'\n\
						wallinttranslation ='0 0 0'\n\
						wallintrotation ='-1 -1 -1 0' >\n\
					</prototype>\n\
				</Transform>\n\
				<Transform  DEF='WallDoorRoom2' rotation='0 1 0 3.14' translation='6.65 -0.90 -14.325'>\n\
					<Shape>\n\
						<Appearance >\n\
							<Material  diffuseColor='0.63 0.49 0.37'/>\n\
						</Appearance>\n\
						<IndexedFaceSet  DEF='DoorWallIntRoom2-FACES'  coordIndex=' 12 13 1 -1 1 0 12 -1 4 5 7 -1 7 6 4 -1 0 1 5 -1 5 4 0 -1 3 2 6 -1 6 7 3 -1 9 15 3 -1 9 3 7 -1 9 7 5 -1 8 9 5 -1 8 5 1 -1 8 1 13 -1 11 12 0 -1 11 0 4 -1 10 11 4 -1 10 4 6 -1 10 6 2 -1 10 2 14 -1 2 3 15 -1 15 14 2 -1 8 11 10 -1 10 9 8 -1 9 10 14 -1 14 15 9 -1 13 12 11 -1 11 8 13 -1' solid='true' ccw='true'>\n\
							<Coordinate  DEF='DoorWallIntRoom2-COORD'  point='-0.1 0.0 3.125, 0.1 0.0 3.125, -0.1 0.0 -3.125, 0.1 0.0 -3.125, -0.1 4.6 3.125, 0.1 4.6 3.125, -0.1 4.6 -3.125, 0.1 4.6 -3.125, 0.1 2.9 1.425, 0.1 2.9 0.225, -0.1 2.9 0.225, -0.1 2.9 1.425, -0.1 0.0 1.425, 0.1 0.0 1.425, -0.1 0.0 0.225, 0.1 0.0 0.225, '/>\n\
						</IndexedFaceSet>\n\
					</Shape>\n\
				</Transform>\n\
				<Transform translation='0 0 -16.94'>\n\
					<Group USE='FrontWallInt' />\n\
				</Transform>\n\
				<Transform rotation='0 1 0 -1.57' translation='-0.95 1.4 -11.65'>\n\
					<!-- <ProtoInstance name='WallInt'>\n\
						 <fieldValue name='wallIntColor' value='0.58 0.72 0.95'/>\n\
						 <fieldValue name='wallIntScale' value='0.9 1 1'/>\n\
					</ProtoInstance> -->\n\
					<prototype use='WallInt' \n\
						wallIntColor ='0.63 0.49 0.37' \n\
						wallIntScale ='0.9 1 1' \n\
						wallinttextureurl =''\n\
						wallinttexturetransformscale ='0.0'\n\
						wallinttranslation ='0 0 0'\n\
						wallintrotation ='-1 -1 -1 0' >\n\
					</prototype>\n\
				</Transform>\n\
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
		<Transform translation='6.85 -0.90 -8.9' onmouseover=\" showText('Antigamente as escadas eram voltadas para a entrada da rua. Foi alterada, provavelmente, em 1920.', 'escada1896.mp3');\">\n\
			<Group DEF='HallIntWalls'> \n\
				<Transform rotation='0 1 0 3.14'>\n\
				<Shape >\n\
					<Appearance >\n\
						<Material  diffuseColor='0.63 0.49 0.37'/>\n\
					</Appearance>\n\
					<IndexedFaceSet  DEF='HallInt-FACES'  coordIndex=' 4 5 22 -1 22 23 4 -1 17 16 24 -1 24 25 17 -1 22 5 0 -1 0 26 22 -1 12 13 7 -1 7 6 12 -1 0 3 2 -1 2 1 0 -1 1 2 6 -1 6 7 1 -1 5 4 3 -1 3 0 5 -1 10 1 7 -1 7 13 10 -1 3 27 24 -1 24 16 2 -1 3 24 2 -1 23 27 3 -1 3 4 23 -1 19 14 8 -1 8 18 19 -1 19 20 15 -1 15 14 19 -1 14 15 11 -1 11 8 14 -1 8 11 10 -1 10 9 8 -1 12 9 10 -1 10 13 12 -1 21 17 25 -1 25 26 0 -1 25 0 1 -1 21 25 1 -1 21 1 10 -1 11 21 10 -1 2 16 18 -1 18 8 9 -1 2 18 9 -1 6 2 9 -1 9 12 6 -1 11 15 20 -1 20 21 11 -1 18 16 17 -1 18 17 21 -1 19 18 21 -1 20 19 21 -1 26 25 24 -1 22 26 24 -1 22 24 27 -1 23 22 27 -1' solid='true' ccw='true'>\n\
						<Coordinate  DEF='HallInt-COORD'  point='0.1 2.9 6.85, 0.1 2.9 5.65, -0.1 2.9 5.65, -0.1 2.9 6.85, -0.1 0.0 6.85, 0.1 0.0 6.85, -0.1 0.0 5.65, 0.1 0.0 5.65, -0.1 2.9 -6.85, -0.1 2.9 -5.65, 0.1 2.9 -5.65, 0.1 2.9 -6.85, -0.1 0.0 -5.65, 0.1 0.0 -5.65, -0.1 0.0 -6.85, 0.1 0.0 -6.85, -0.1 4.587 -7.451, 0.1 4.587 -7.451, -0.1 4.177 -7.451, -0.1 0.0 -7.451, 0.1 0.0 -7.451, 0.1 4.177 -7.451, 0.1 0.0 7.08, -0.1 0.0 7.08, -0.1 4.6 7.08, 0.1 4.6 7.08, 0.1 3.389 7.08, -0.1 3.389 7.08, '/>\n\
					</IndexedFaceSet>\n\
				</Shape>\n\
				</Transform>\n\
				<Transform  DEF='HallInt'  translation='2.6 0.0 7.40'>\n\
					<Group DEF='HallWall'>\n\
						<Shape>\n\
							<IndexedFaceSet DEF='EntranceInt-FACES'  coordIndex=' 3 1 20 -1 20 21 3 -1 4 5 7 -1 7 6 4 -1 1 3 7 -1 7 5 1 -1 2 0 4 -1 4 6 2 -1 8 11 10 -1 10 9 8 -1 13 14 11 -1 11 8 13 -1 14 13 12 -1 12 15 14 -1 9 10 15 -1 15 12 9 -1 9 0 24 -1 9 24 27 -1 8 9 27 -1 4 0 9 -1 9 12 4 -1 22 3 21 -1 14 15 6 -1 6 7 14 -1 20 1 23 -1 24 0 2 -1 2 25 24 -1 16 13 8 -1 8 27 16 -1 10 11 26 -1 2 10 26 -1 25 2 26 -1 26 19 16 -1 26 16 27 -1 25 26 27 -1 24 25 27 -1 21 20 23 -1 22 21 23 -1 22 23 17 -1 22 17 18 -1 16 19 18 -1 18 17 16 -1 10 2 6 -1 6 15 10 -1 18 19 14 -1 14 7 18 -1 19 26 11 -1 11 14 19 -1 4 12 13 -1 13 16 17 -1 13 17 5 -1 13 5 4 -1 18 7 33 -1 18 33 28 -1 22 18 28 -1 22 28 29 -1 3 22 29 -1 7 3 29 -1 7 29 32 -1 33 7 32 -1 34 35 5 -1 34 5 17 -1 31 34 17 -1 31 17 23 -1 30 31 23 -1 30 23 1 -1 30 1 5 -1 30 5 35 -1 32 35 34 -1 34 33 32 -1 33 34 31 -1 31 28 33 -1 29 28 31 -1 31 30 29 -1 32 29 30 -1 30 35 32 -1' solid='true' ccw='true'>\n\
								<Coordinate DEF='EntranceInt-COORD'  point='-2.5 0.0 0.075, 2.5 0.0 0.075, -2.5 0.0 -0.075, 2.5 0.0 -0.075, -2.5 4.6 0.075, 2.5 4.6 0.075, -2.5 4.6 -0.075, 2.5 4.6 -0.075, -1.3 0.9 0.075, -1.9 0.9 0.075, -1.9 0.9 -0.075, -1.3 0.9 -0.075, -1.9 3.9 0.075, -1.3 3.9 0.075, -1.3 3.9 -0.075, -1.9 3.9 -0.075, -0.9 3.8 0.075, 0.9 3.8 0.075, 0.9 3.8 -0.075, -0.9 3.8 -0.075, 0.9 0.0 0.075, 0.9 0.0 -0.075, 0.9 0.3789 -0.075, 0.9 0.3789 0.075, -0.9 0.0 0.075, -0.9 0.0 -0.075, -0.9 0.8053 -0.075, -0.9 0.8053 0.075, 1.3 0.9 -0.075, 1.9 0.9 -0.075, 1.9 0.9 0.075, 1.3 0.9 0.075, 1.9 3.9 -0.075, 1.3 3.9 -0.075, 1.3 3.9 0.075, 1.9 3.9 0.075, '/>\n\
							</IndexedFaceSet>\n\
							<Appearance>\n\
								<Material diffuseColor='0.63 0.49 0.37'/>\n\
							</Appearance>\n\
						</Shape>\n\
					</Group>\n\
				</Transform>\n\
				<Transform translation='2.60 0.0 -7.00'>\n\
					<Group USE='HallWall' />\n\
				</Transform>\n\
		   </Group>\n\
		   <Group DEF='Stairs1896'>\n\
				<Transform  translation='-6.7 0.9 8.30' >\n\
					<!-- <Inline  bboxCenter='0.0 0.0 0.0' url='escada1895.x3d' bboxSize='5.0 5.0 5.0'/> -->\n\
					<prototype use='escada1895'> </prototype>\n\
				</Transform>\n\
		   </Group>\n\
	   </Transform>\n\
	   \n\
\n\
		<!-- Switch dos textos -->\n\
		<!--<Switch DEF='Switcher1896' whichChoice='0' id='textos1896'>\n\
\n\
			<Group>\n\
				<Transform DEF='HUD' translation='-6 4 0'>\n\
					<Shape DEF='Text2'>\n\
						<Appearance>\n\
							<Material diffuseColor='1 1 1'/>\n\
						</Appearance> \n\
						<!-- msg ROUTE:  [from viewMetadata.msg to string ] - ->\n\
						<!-- <Text DEF='msg' maxExtent='0.000' string=''Metadata Info', 'line2'' solid='false'>\n\
							<FontStyle justify=''BEGIN' 'BEGIN'' size='.400'/>\n\
						</Text> - ->\n\
						<Text DEF='msg' maxExtent='0.000' string='\"Mackenzie Building\" \"1896\"' solid='false'>\n\
							<FontStyle justify=''BEGIN' 'BEGIN'' size='.500'/>\n\
						</Text>\n\
					</Shape>\n\
				<!--<ProximitySensor DEF='PS' size='10 10 10'/>- -> \n\
				</Transform>\n\
			</Group>\n\
\n\
			<Group>\n\
				<Transform translation='-6 4 0'>\n\
					<Shape>\n\
						<Appearance>\n\
							<Material diffuseColor='1 1 1'/>\n\
						</Appearance> \n\
						<Text USE='msg' string='\"Sala 1\" \"foi dividida em 2 salas,\" \"durante o funcionamento da Escola de Engenharia.\" \"Foi alterada, provavelmente, em 1920.\"' />\n\
					</Shape>\n\
				</Transform>\n\
			</Group>\n\
\n\
			<Group>\n\
				<Transform translation='-6 4 0'>\n\
					<Shape>\n\
						<Appearance>\n\
							<Material diffuseColor='1 1 1'/>\n\
						</Appearance> \n\
						<Text maxExtent='0.000' string='\"Antigamente as escadas eram\" \"voltadas para a entrada da rua.\" \"Foi alterada, provavelmente, em 1920.\"' solid='false'>\n\
							<FontStyle justify=''BEGIN' 'BEGIN'' size='.500'/>\n\
						</Text>\n\
					</Shape>\n\
				</Transform>\n\
			</Group>\n\
\n\
		</Switch>-->\n\
	    <!--<ROUTE fromNode='PS' fromField='position_changed' toNode='HUD' toField='set_translation'/> \n\
		<ROUTE fromNode='PS' fromField='orientation_changed' toNode='HUD' toField='set_rotation'/>\n\
		\n\
		<Script DEF='viewMetadata'>\n\
			<field name='TSRoom1' type='SFBool' accessType='inputOnly'/>\n\
			<field name='room1Meta'  type='SFNode' accessType='initializeOnly'>\n\
				<!-- initialization node (if any) goes here- ->\n\
			</field> \n\
			<field name='msg' type='MFString' accessType='outputOnly'/> \n\
			<![CDATA[\n\
				ecmascript:\n\
					function initialize(){\n\
						msg = new MFString();\n\
						msg[0] = 'Metadata Here 1';\n\
					}\n\
					function TSRoom1(val){ \n\
						//msg = buildString(room1Meta); \n\
						//msg[0] = room1Meta.reference;\n\
						//msg[1] = room1Meta.reference;\n\
						//msg[2] = room1Meta.reference;\n\
\n\
						msg[0] = 'Room1:';\n\
						msg[1] = 'was divided in Room1a and Room1b'; \n\
						msg[2] = 'occurs during School of Engeneering'; \n\
						msg[3] = 'was changed in 1920'; \n\
					} \n\
\n\
					function buildString(aNode){ \n\
						// walking for metadata works differently across browsers encodings!!! \n\
						str = new MFString(); \n\
						str [0] = aNode.reference; \n\
						// the top DEF'd MetaDataSet \n\
						tmp = new MFNode(); \n\
						tmp = aNode.children; \n\
						Browser.print(tmp.length); \n\
						//for (i = 0; tmp.length ; i++)\n\
						//{\n\
						   // this = aNode.children[i]; \n\
						   // // if () // drill down one more level of children \n\
						   return str;\n\
						//}\n\
					}\n\
			]]>\n\
		</Script>\n\
		<ROUTE fromNode='TSRoom1' fromField='isOver' toNode='viewMetadata' toField='TSRoom1'/> \n\
		<ROUTE fromNode='viewMetadata' fromField='msg' toNode='msg' toField='string'/> --> \n\
	\
	";
}

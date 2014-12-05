var testEntrance = " 'entranceexttextureurl':'texture/tijolo2.jpg', 'entranceextcolor':'1 1 1', 'entrancescale':'1 1 1', 'entrancetranslation':'0 0 0', 'entrancerotation':'-1 -1 -1 0' ";	//Colocar parametros aqui para testar

function Entrance(attr){ //nome do Prototype	- Necessário: ____
	return "\n\
	\
		<!-- <ProtoDeclare name='Entrance' appinfo='internal entrance'>\n\
		<ProtoInterface>\n\
			<field name='entranceExtTextureUrl' type='MFString' accessType='inputOutput'/>\n\
			<field name='entranceExtColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
			<field name='entranceScale' type='SFVec3f' value='1 1 1' accessType='inputOutput'/> \n\
			<field name='entranceTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
			<field name='entranceRotation' type='SFRotation' value='-1 -1 -1 0' accessType='inputOutput'/>\n\
		</ProtoInterface> \n\
		<ProtoBody> -->\n\
			<Transform DEF='EntranceInt' translation='"+ attr.entrancetranslation +"' rotation='"+ attr.entrancerotation +"' scale='"+ attr.entrancescale +"'>\n\
			  <!-- <IS>\n\
				 <connect nodeField='translation' protoField='entranceTranslation'/>\n\
			  </IS>\n\
			  <IS>\n\
				 <connect nodeField='rotation' protoField='entranceRotation'/>\n\
			  </IS>\n\
			  <IS>\n\
				 <connect nodeField='scale' protoField='entranceScale'/>\n\
				</IS> -->\n\
				<Transform translation='0 0 0.15'>\n\
					<Shape>\n\
						<IndexedFaceSet  DEF='EntranceExt-FACES'  coordIndex=' 3 1 20 -1 20 21 3 -1 4 5 7 -1 7 6 4 -1 1 3 7 -1 7 5 1 -1 2 0 4 -1 4 6 2 -1 12 15 14 -1 14 13 12 -1 13 14 11 -1 11 8 13 -1 9 8 11 -1 11 10 9 -1 12 9 10 -1 10 15 12 -1 9 0 24 -1 9 24 27 -1 8 9 27 -1 4 0 9 -1 9 12 4 -1 22 3 21 -1 14 15 6 -1 6 7 14 -1 20 1 23 -1 24 0 2 -1 2 25 24 -1 16 13 8 -1 8 27 16 -1 10 11 26 -1 2 10 26 -1 25 2 26 -1 26 19 16 -1 26 16 27 -1 25 26 27 -1 24 25 27 -1 21 20 23 -1 22 21 23 -1 22 23 17 -1 22 17 18 -1 16 19 18 -1 18 17 16 -1 10 2 6 -1 6 15 10 -1 18 19 14 -1 14 7 18 -1 19 26 11 -1 11 14 19 -1 4 12 13 -1 13 16 17 -1 13 17 5 -1 13 5 4 -1 18 7 33 -1 18 33 28 -1 22 18 28 -1 22 28 29 -1 3 22 29 -1 7 3 29 -1 7 29 32 -1 33 7 32 -1 34 35 5 -1 34 5 17 -1 31 34 17 -1 31 17 23 -1 30 31 23 -1 30 23 1 -1 30 1 5 -1 30 5 35 -1 31 28 33 -1 33 34 31 -1 28 31 30 -1 30 29 28 -1 34 33 32 -1 32 35 34 -1 32 29 30 -1 30 35 32 -1' solid='true' ccw='true'>\n\
							<Coordinate  DEF='EntranceExt-COORD'  point='-2.5 0.0 0.075, 2.5 0.0 0.075, -2.5 0.0 -0.075, 2.5 0.0 -0.075, -2.5 4.6 0.075, 2.5 4.6 0.075, -2.5 4.6 -0.075, 2.5 4.6 -0.075, -1.3 0.9 0.075, -1.9 0.9 0.075, -1.9 0.9 -0.075, -1.3 0.9 -0.075, -1.9 3.9 0.075, -1.3 3.9 0.075, -1.3 3.9 -0.075, -1.9 3.9 -0.075, -0.9 3.8 0.075, 0.9 3.8 0.075, 0.9 3.8 -0.075, -0.9 3.8 -0.075, 0.9 0.0 0.075, 0.9 0.0 -0.075, 0.9 0.3789 -0.075, 0.9 0.3789 0.075, -0.9 0.0 0.075, -0.9 0.0 -0.075, -0.9 0.8053 -0.075, -0.9 0.8053 0.075, 1.3 0.9 -0.075, 1.9 0.9 -0.075, 1.9 0.9 0.075, 1.3 0.9 0.075, 1.9 3.9 -0.075, 1.3 3.9 -0.075, 1.3 3.9 0.075, 1.9 3.9 0.075, '/>\n\
						</IndexedFaceSet>\n\
						<Appearance>\n\
							<Material DEF='entranceExtColor' diffuseColor='"+ attr.entranceextcolor +"'>\n\
							<!-- <IS>\n\
								 <connect nodeField='diffuseColor' protoField='entranceExtColor'/>\n\
								</IS> -->\n\
							</Material>\n\
							<ImageTexture url='"+ attr.entranceexttextureurl +"'>\n\
							<!-- <IS>\n\
								 <connect nodeField='url' protoField='entranceExtTextureUrl'/>\n\
								</IS> -->\n\
							</ImageTexture>\n\
						</Appearance>\n\
					</Shape>\n\
				</Transform>\n\
				<Group DEF='SideWindow'>\n\
					<Transform DEF='WindowFrame' translation='1.6 0.9 0.1'>\n\
						<Shape >\n\
							<Appearance>\n\
								<Material diffuseColor='1 1 1' />\n\
							</Appearance>\n\
							<IndexedFaceSet DEF='WindowFrame-FACES' coordIndex=' 0 2 3 -1 3 1 0 -1 4 5 7 -1 7 6 4 -1 1 3 7 -1 7 5 1 -1 2 0 4 -1 4 6 2 -1 8 11 10 -1 10 9 8 -1 13 14 11 -1 11 8 13 -1 14 13 12 -1 12 15 14 -1 9 10 15 -1 15 12 9 -1 1 8 9 -1 9 0 1 -1 9 12 16 -1 9 16 4 -1 9 4 0 -1 2 10 11 -1 11 3 2 -1 11 14 17 -1 11 17 7 -1 11 7 3 -1 17 23 20 -1 20 7 17 -1 16 24 18 -1 18 4 16 -1 22 23 25 -1 25 24 22 -1 19 20 23 -1 23 22 19 -1 20 19 18 -1 18 21 20 -1 24 25 21 -1 21 18 24 -1 10 2 6 -1 25 10 6 -1 21 25 6 -1 23 17 14 -1 23 14 15 -1 25 23 15 -1 15 10 25 -1 22 13 8 -1 8 1 5 -1 22 8 5 -1 19 22 5 -1 24 16 12 -1 24 12 13 -1 22 24 13 -1 6 31 26 -1 21 6 26 -1 21 26 27 -1 20 21 27 -1 7 20 27 -1 7 27 30 -1 6 7 30 -1 31 6 30 -1 5 33 28 -1 19 5 28 -1 19 28 29 -1 18 19 29 -1 4 18 29 -1 4 29 32 -1 5 4 32 -1 33 5 32 -1 26 29 28 -1 28 27 26 -1 31 32 29 -1 29 26 31 -1 32 31 30 -1 30 33 32 -1 27 28 33 -1 33 30 27 -1' solid='true' ccw='true'>\n\
								<Coordinate DEF='WindowFrame-COORD' point='-0.3 0.0 0.05, 0.3 0.0 0.05, -0.3 0.0 -0.05, 0.3 0.0 -0.05, -0.3 3.0 0.05, 0.3 3.0 0.05, -0.3 3.0 -0.05, 0.3 3.0 -0.05, 0.25 0.05 0.05, -0.25 0.05 0.05, -0.25 0.05 -0.05, 0.25 0.05 -0.05, -0.25 0.95 0.05, 0.25 0.95 0.05, 0.25 0.95 -0.05, -0.25 0.95 -0.05, -0.2512 1.0 0.05, 0.2512 1.0 -0.05, -0.25 1.9 0.05, 0.25 1.9 0.05, 0.25 1.9 -0.05, -0.25 1.9 -0.05, 0.25 1.0 0.05, 0.25 1.0 -0.05, -0.25 1.0 0.05, -0.25 1.0 -0.05, -0.25 2.05 -0.05, 0.25 2.05 -0.05, 0.25 2.05 0.05, -0.25 2.05 0.05, 0.25 2.95 -0.05, -0.25 2.95 -0.05, -0.25 2.95 0.05, 0.25 2.95 0.05, '/>\n\
							</IndexedFaceSet>\n\
						</Shape>\n\
					</Transform>\n\
					<Transform  translation='1.6 0.95 -0.125'>\n\
						<Group DEF='WindowGlass'>\n\
							<Transform  translation='0.0 0.45 0.2'>\n\
								<Shape>\n\
									<Appearance >\n\
										<Material  diffuseColor='0.8392 0.898 0.651' transparency='0.5'/>\n\
									</Appearance>\n\
									<Box size='0.5 0.9 0.05'></Box>\n\
								</Shape>\n\
							</Transform>\n\
						</Group>\n\
					</Transform>\n\
					<Transform translation='1.6 1.9 -0.125'>\n\
						<Group USE='WindowGlass'></Group>\n\
					</Transform>\n\
					<Transform translation='1.6 2.95 -0.125'>\n\
						<Group USE='WindowGlass'></Group>\n\
					</Transform>\n\
				</Group>\n\
				<Transform  translation='-3.2 0.0 -0.1'>\n\
					<Group USE='SideWindow'></Group>\n\
				</Transform>\n\
			</Transform>\n\
	\
	";
}



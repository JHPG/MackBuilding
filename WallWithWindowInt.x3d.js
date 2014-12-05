var testWallWithWindowInt = " 'wallwindowintcolor':'1 1 1', 'wallwindowtranslation':'0 0 0', 'wallwindowrotation':'-1 -1 -1 0', 'wallwindowinttextureurl':'' ";	//Colocar parametros aqui para testar

function WallWithWindowInt(attr){ //nome do Prototype
	return "\n\
	\
		<!--<ProtoDeclare name='WallWithWindowInt' appinfo='Simple model of a internal wall with a window in arc'>\n\
				<ProtoInterface>\n\
						<field name='wallWindowIntTextureUrl' type='MFString' accessType='inputOutput'/> \n\
						<field name='wallWindowIntColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
						<field name='wallWindowTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
						<field name='wallWindowRotation' type='SFRotation' value='-1 -1 -1 0' accessType='inputOutput'/>\n\
				  </ProtoInterface> \n\
				  <ProtoBody> -->\n\
				  	<Transform DEF='WallWindow' rotation='"+ attr.wallwindowrotation +"' translation='"+ attr.wallwindowtranslation +"'>\n\
					<!-- <IS>\n\
					 <connect nodeField='translation' protoField='wallWindowTranslation'/>\n\
				   </IS>\n\
				   <IS>\n\
					 <connect nodeField='rotation' protoField='wallWindowRotation'/>\n\
					</IS> -->\n\
					<Transform  DEF='WallWithWindowInt'  translation='0.0 0 -0.25' rotation='0.0 -1.0 0.0  -1.571'>\n\
						<Shape >\n\
							<Appearance>\n\
								<Material  DEF='WallIntColor' diffuseColor='"+ attr.wallwindowintcolor +"' url='"+ attr.wallwindowinttextureurl +"' />\n\
								<!-- <IS>\n\
									<connect nodeField='diffuseColor' protoField='wallWindowIntColor'/>\n\
								</IS> -->\n\
						<ImageTexture url='"+ attr.wallwindowinttextureurl +"'>\n\
							<!-- <IS>\n\
								<connect nodeField='url' protoField='wallWindowIntTextureUrl'/>\n\
							</IS> -->\n\
						</ImageTexture>\n\
				</Appearance>\n\
				<IndexedFaceSet  DEF='WallWithWindowInt-FACES'  coordIndex=' 4 5 7 -1 7 6 4 -1 0 1 5 -1 5 4 0 -1 3 2 6 -1 6 7 3 -1 2 28 32 -1 32 6 2 -1 33 1 30 -1 35 9 8 -1 8 34 35 -1 37 11 10 -1 10 36 37 -1 39 13 12 -1 12 38 39 -1 41 15 14 -1 14 40 41 -1 44 17 16 -1 16 42 44 -1 35 18 20 -1 20 36 35 -1 34 19 18 -1 18 35 34 -1 37 21 22 -1 22 38 37 -1 36 20 21 -1 21 37 36 -1 39 23 24 -1 24 40 39 -1 38 22 23 -1 23 39 38 -1 41 25 26 -1 26 42 41 -1 40 24 25 -1 25 41 40 -1 42 26 33 -1 33 44 42 -1 43 27 19 -1 19 34 43 -1 34 8 32 -1 32 43 34 -1 36 10 9 -1 9 35 36 -1 38 12 11 -1 11 37 38 -1 40 14 13 -1 13 39 40 -1 42 16 15 -1 15 41 42 -1 28 31 27 -1 32 28 27 -1 32 27 43 -1 30 29 17 -1 17 33 30 -1 17 44 33 -1 32 8 6 -1 8 9 6 -1 9 10 6 -1 4 6 10 -1 10 11 4 -1 11 12 4 -1 12 13 4 -1 13 14 4 -1 14 15 4 -1 15 16 4 -1 0 4 16 -1 16 17 0 -1 17 29 0 -1 26 5 1 -1 1 33 26 -1 26 25 5 -1 25 24 5 -1 24 23 5 -1 23 22 5 -1 22 21 5 -1 20 7 5 -1 5 21 20 -1 20 18 7 -1 18 19 7 -1 19 27 3 -1 3 7 19 -1 27 31 3 -1 45 47 48 -1 48 46 45 -1 46 48 1 -1 1 0 46 -1 47 45 2 -1 2 3 47 -1 28 2 45 -1 28 45 46 -1 49 28 46 -1 29 49 46 -1 0 29 46 -1 30 1 48 -1 50 30 48 -1 51 50 48 -1 3 51 48 -1 3 48 47 -1 51 3 31 -1 50 51 31 -1 50 31 28 -1 50 28 49 -1 50 49 29 -1 50 29 30 -1' solid='true' ccw='true'>\n\
					<Coordinate  DEF='WallWithWindowInt-COORD'  point='-0.1 0.0 0.85, 0.1 0.0 0.85, -0.1 0.0 -0.85, 0.1 0.0 -0.85, -0.1 3.7 0.85, 0.1 3.7 0.85, -0.1 3.7 -0.85, 0.1 3.7 -0.85, -0.1 2.104 -0.5909, -0.1 2.3 -0.5196, -0.1 2.46 -0.3857, -0.1 2.564 -0.2052, -0.1 2.6 0.0, -0.1 2.564 0.2052, -0.1 2.46 0.3857, -0.1 2.3 0.5196, -0.1 2.104 0.5909, -0.1 2.0 0.5954, 0.1 2.3 -0.5196, 0.1 2.104 -0.5909, 0.1 2.46 -0.3857, 0.1 2.564 -0.2052, 0.1 2.6 0.0, 0.1 2.564 0.2052, 0.1 2.46 0.3857, 0.1 2.3 0.5196, 0.1 2.104 0.5909, 0.1 2.0 -0.5954, -0.1 0.0 -0.6002, -0.1 0.0 0.6, 0.1 0.0 0.6, 0.09982 0.0 -0.6002, -0.1 2.0 -0.5954, 0.1 2.0 0.5954, -0.06 2.104 -0.5909, -0.06 2.3 -0.5196, -0.06 2.46 -0.3857, -0.06 2.564 -0.2052, -0.06 2.6 0.0, -0.06 2.564 0.2052, -0.06 2.46 0.3857, -0.06 2.3 0.5196, -0.06 2.104 0.5909, -0.06 2.0 -0.5909, -0.06 2.0 0.5909, -0.1 -0.9 -0.85, -0.1 -0.9 0.85, 0.1 -0.9 -0.85, 0.1 -0.9 0.85, -0.1 0.0 -0.6, 0.1 0.0 -0.6, 0.1 0.0 -0.6005, '/>\n\
				</IndexedFaceSet>\n\
			</Shape>\n\
		</Transform>\n\
	</Transform>\n\
	\
	";
}


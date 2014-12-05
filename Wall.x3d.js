var testWall = "'walltextureurl':'texture/tijolo.jpg', 'wallfootertextureurl':'texture/stone.jpg', 'walldrippingtextureurl':'texture/stone.jpg', 'walltexturetransformscale':'0.5 1', 'walldrippingtexturetransformscale':'0.5 1', 'wallfootertexturetransformscale':'0.5 1', 'wallcolor':'0.58 0.72 0.95', 'wallfootercolor':'1 1 1', 'walldrippingcolor':'1 1 1', 'wallscale':'0.5 1 1', 'walltranslation':'0 0 0', 'wallrotation':'-1 -1 -1 0' ";	//Colocar parametros aqui para testar

function Wall(attributes){ //nome do Prototype \n\ 
		//Necessário: wallTextureUrl, wallFooterTextureUrl, wallDrippingTextureUrl, wallTextureTransformScale, wallDrippingTextureTransformScale, wallDrippingTextureTransformScale, wallFooterTextureTransformScale, wallColor, wallFooterColor, wallDrippingColor, wallScale,wallTranslation e wallRotation. \n\
	return "\n\
	\
		<!--<ProtoDeclare name='Wall' appinfo='Entrance'>\n\
			<ProtoInterface>\n\
				<field name='wallTextureUrl' type='MFString' accessType='inputOutput'/>\n\
				<field name='wallFooterTextureUrl' type='MFString' accessType='inputOutput'/>\n\
				<field name='wallDrippingTextureUrl' type='MFString' accessType='inputOutput'/>\n\
				<field name='wallTextureTransformScale' type='SFVec2f' value='0.0' accessType='inputOutput' />\n\
				<field name='wallDrippingTextureTransformScale' type='SFVec2f' value='0.0' accessType='inputOutput' />\n\
				<field name='wallFooterTextureTransformScale' type='SFVec2f' value='0.0' accessType='inputOutput' />\n\
				<field name='wallColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
				<field name='wallFooterColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
				<field name='wallDrippingColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
				<field name='wallScale' type='SFVec3f' value='1 1 1' accessType='inputOutput'/>\n\
				<field name='wallTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
				<field name='wallRotation' type='SFRotation' value='-1 -1 -1 0' accessType='inputOutput'/>\n\
			</ProtoInterface> \n\
			<ProtoBody>-->\n\
			\n\
				<Transform DEF='WallIntRoom' rotation='"+ attributes.wallrotation +"' translation='"+ attributes.walltranslation +"' scale='"+ attributes.wallscale +"' >\n\
					 <!--<IS>\n\
						 <connect nodeField='translation' protoField='wallTranslation'/>\n\
					  </IS>\n\
					  <IS>\n\
						 <connect nodeField='rotation' protoField='wallRotation'/>\n\
					  </IS>\n\
					  <IS>\n\
						 <connect nodeField='scale' protoField='wallScale'/>\n\
					  </IS> -->\n\
					  <Transform translation='0 0 0'>\n\
						  <Shape DEF='Wall'>\n\
							<Box size='1 3.7 0.3'></Box>\n\
							<Appearance>\n\
								<Material diffuseColor='"+ attributes.wallcolor +"' />\n\
	                                <!-- <IS>\n\
	                                    <connect nodeField='diffuseColor' protoField='wallColor'/>\n\
	                                </IS> -->\n\
	                            </Material>\n\
	                            <!--<Texture> <img src='pedras003.jpg'> </Texture>-->\n\
								<ImageTexture url='"+ attributes.walltextureurl +"'>\n\
									<!--<IS>\n\
										<connect nodeField='url' protoField='wallTextureUrl'/>\n\
									</IS>-->\n\
								</ImageTexture>\n\
								<TextureTransform scale='"+ attributes.walltexturetransformscale +"'>\n\
									<!-- <IS>\n\
										<connect nodeField='scale' protoField='wallTextureTransformScale'/>\n\
									</IS> -->\n\
								</TextureTransform>\n\
							 </Appearance>\n\
						  </Shape>\n\
					  </Transform>\n\
					  \n\
					  <Transform translation='0 -2.65 0'>\n\
					  <Shape DEF='Footer'>\n\
						<Box size='1 1.6 0.3'></Box>\n\
						<Appearance>\n\
							<Material diffuseColor='"+ attributes.wallfootercolor +"'>\n\
								<!-- <IS>\n\
									<connect nodeField='diffuseColor' protoField='wallFooterColor'/>\n\
								</IS> -->\n\
							</Material>\n\
							<ImageTexture url='"+ attributes.wallfootertextureurl +"'>\n\
								<!-- <IS>\n\
									<connect nodeField='url' protoField='wallFooterTextureUrl'/>\n\
								</IS> -->\n\
							</ImageTexture>\n\
							<TextureTransform scale='"+ attributes.wallfootertexturetransformscale +"'>\n\
								<!-- <IS>\n\
									<connect nodeField='scale' protoField='wallFooterTextureTransformScale'/>\n\
								</IS> -->\n\
							</TextureTransform>\n\
						 </Appearance>\n\
					  </Shape>\n\
					  </Transform>\n\
					  \n\
					  <Transform translation='0 2 0'>\n\
					  <Shape DEF='Dripping'>\n\
						<Box size='1 0.3 0.3'></Box>\n\
						<Appearance>\n\
							<Material diffuseColor='"+ attributes.walldrippingcolor +"' />\n\
								<!-- <IS>\n\
									<connect nodeField='diffuseColor' protoField='wallDrippingColor'/>\n\
								</IS> -->\n\
							</Material>\n\
							<ImageTexture url='"+ attributes.walldrippingtextureurl +"'>\n\
								<!-- <IS>\n\
									<connect nodeField='url' protoField='wallDrippingTextureUrl'/>\n\
								</IS> -->\n\
							</ImageTexture>\n\
							<TextureTransform scale='"+ attributes.walldrippingtexturetransformscale +"'>\n\
								<!-- <IS>\n\
									<connect nodeField='scale' protoField='wallDrippingTextureTransformScale'/>\n\
								</IS> -->\n\
							</TextureTransform>\n\
						 </Appearance>\n\
					  </Shape>\n\
					  </Transform>\n\
				   </Transform>\n\
	\
	";
}
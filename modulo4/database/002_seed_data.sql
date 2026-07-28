-- Pontos de coleta em Recife
INSERT INTO collection_points (name, address, latitude, longitude, opening_hours, accepted_items) VALUES
('EcoPonto Boa Viagem', 'Av. Conselheiro Aguiar, 2000 - Boa Viagem', -8.1200, -34.9010, 'Seg-Sex 8h-17h', ARRAY['celular','computador','bateria']),
('Ponto Verde Casa Forte', 'Praça de Casa Forte, s/n', -8.0340, -34.9100, 'Seg-Sáb 7h-16h', ARRAY['celular','computador','tv','eletrodomestico','bateria']),
('Coleta Tech Ibura', 'Rua Dois Irmãos, 500 - Ibura', -8.1100, -34.9450, 'Ter-Sáb 9h-15h', ARRAY['celular','computador','bateria','outro']),
('EcoDescarte Derby', 'Praça do Derby, 100 - Derby', -8.0560, -34.8990, 'Seg-Sex 8h-18h', ARRAY['celular','computador','tv','eletrodomestico','bateria','outro']),
('Recicla Eletrônicos Espinheiro', 'Rua do Espinheiro, 800', -8.0410, -34.8920, 'Seg-Sex 9h-17h, Sáb 9h-12h', ARRAY['celular','computador','tv']);

-- Usuário de teste
INSERT INTO users (name, email, password_hash, phone, points) VALUES
('Aluno Teste', 'aluno@teste.com', '$2a$10$dummy.hash.for.testing.purposes.only', '(81) 99999-0000', 50);
